import type {
	IDataObject,
	IHookFunctions,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes } from 'n8n-workflow';
import { createHmac, timingSafeEqual } from 'crypto';

const PRODUCTION_BASE_URL = 'https://api.firma.dev/functions/v1/signing-request-api';

function getBaseUrl(credentials: { environment: string; customBaseUrl?: string }): string {
	return credentials.environment === 'custom' && credentials.customBaseUrl
		? credentials.customBaseUrl
		: PRODUCTION_BASE_URL;
}

export class FirmaTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Firma Trigger',
		name: 'firmaTrigger',
		icon: { light: 'file:firma.svg', dark: 'file:firma.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["events"].join(", ")}}',
		description: 'Starts a workflow when a Firma event occurs',
		defaults: {
			name: 'Firma Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'firmaApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',
				type: 'string',
				default: '',
				description: 'Scope webhook to a specific workspace. Without this, the webhook receives events for ALL workspaces in the company.',
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: [],
				options: [
					{ name: 'Domain Verification Failed', value: 'domain.verification.failed' },
					{ name: 'Domain Verified', value: 'domain.verified' },
					{ name: 'Signing Request Cancelled', value: 'signing_request.cancelled' },
					{ name: 'Signing Request Certificate Generated', value: 'signing_request.certificate.generated' },
					{ name: 'Signing Request Completed', value: 'signing_request.completed' },
					{ name: 'Signing Request Created', value: 'signing_request.created' },
					{ name: 'Signing Request Deleted', value: 'signing_request.deleted' },
					{ name: 'Signing Request Document Updated', value: 'signing_request.document.updated' },
					{ name: 'Signing Request Expired', value: 'signing_request.expired' },
					{ name: 'Signing Request Field Filled', value: 'signing_request.field.filled' },
					{ name: 'Signing Request Recipient Added', value: 'signing_request.recipient.added' },
					{ name: 'Signing Request Recipient Declined', value: 'signing_request.recipient.declined' },
					{ name: 'Signing Request Recipient Identity Changed', value: 'signing_request.recipient.identity_changed' },
					{ name: 'Signing Request Recipient Signed', value: 'signing_request.recipient.signed' },
					{ name: 'Signing Request Recipient Updated', value: 'signing_request.recipient.updated' },
					{ name: 'Signing Request Reminder Sent', value: 'signing_request.reminder.sent' },
					{ name: 'Signing Request Sent', value: 'signing_request.sent' },
					{ name: 'Signing Request Updated', value: 'signing_request.updated' },
					{ name: 'Signing Request Viewed', value: 'signing_request.viewed' },
					{ name: 'Template Created', value: 'template.created' },
					{ name: 'Template Deleted', value: 'template.deleted' },
					{ name: 'Template Field Added', value: 'template.field.added' },
					{ name: 'Template Updated', value: 'template.updated' },
					{ name: 'Template Used', value: 'template.used' },
					{ name: 'Workspace Created', value: 'workspace.created' },
					{ name: 'Workspace Deleted', value: 'workspace.deleted' },
					{ name: 'Workspace Updated', value: 'workspace.updated' },
				],
				description: 'Which events to listen for (27 available)',
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				if (!webhookData.webhookId) return false;

				const credentials = await this.getCredentials('firmaApi');
				const baseUrl = getBaseUrl(credentials as { environment: string; customBaseUrl?: string });

				try {
					await this.helpers.httpRequestWithAuthentication.call(this, 'firmaApi', {
						method: 'GET',
						url: `${baseUrl}/webhooks/${webhookData.webhookId}`,
					});
					return true;
				} catch (error) {
					const statusCode = (error as { httpCode?: number }).httpCode;
					if (statusCode === 404) {
						delete webhookData.webhookId;
						return false;
					}
					throw new NodeApiError(this.getNode(), error as JsonObject);
				}
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const events = this.getNodeParameter('events') as string[];
				const workspaceId = this.getNodeParameter('workspaceId') as string;
				const credentials = await this.getCredentials('firmaApi');
				const baseUrl = getBaseUrl(credentials as { environment: string; customBaseUrl?: string });
				const webhookData = this.getWorkflowStaticData('node');

				// Orphan recovery: check if a webhook with this URL already exists
				try {
					const existing = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'firmaApi',
						{
							method: 'GET',
							url: `${baseUrl}/webhooks`,
							qs: { page_size: 200 },
							json: true,
						},
					) as { results?: Array<{ id: string; url: string }> };

					const orphan = existing.results?.find(
						(w) => w.url === webhookUrl,
					);

					if (orphan) {
						webhookData.webhookId = orphan.id;
						// Update the orphan with current events
						await this.helpers.httpRequestWithAuthentication.call(
							this,
							'firmaApi',
							{
								method: 'PUT',
								url: `${baseUrl}/webhooks/${orphan.id}`,
								body: { events, enabled: true },
								json: true,
							},
						);
						return true;
					}
				} catch (error) {
					this.logger.warn(`Orphan webhook lookup failed, creating new: ${(error as Error).message}`);
				}

				const body: Record<string, unknown> = {
					url: webhookUrl,
					events,
					enabled: true,
					description: `n8n-managed: ${this.getWorkflow().name}`,
				};

				if (workspaceId) {
					body.workspace_id = workspaceId;
				}

				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'firmaApi',
					{
						method: 'POST',
						url: `${baseUrl}/webhooks`,
						body,
						json: true,
					},
				);

				webhookData.webhookId = response.id;
				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				if (!webhookData.webhookId) return true;

				const credentials = await this.getCredentials('firmaApi');
				const baseUrl = getBaseUrl(credentials as { environment: string; customBaseUrl?: string });

				try {
					await this.helpers.httpRequestWithAuthentication.call(this, 'firmaApi', {
						method: 'DELETE',
						url: `${baseUrl}/webhooks/${webhookData.webhookId}`,
					});
				} catch (error) {
					const statusCode = (error as { httpCode?: number }).httpCode;
					if (statusCode !== 404) {
						throw new NodeApiError(this.getNode(), error as JsonObject);
					}
				}

				delete webhookData.webhookId;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const body = this.getBodyData() as IDataObject;

		const credentials = await this.getCredentials('firmaApi');
		const secret = (credentials as { webhookSecret?: string }).webhookSecret;

		if (secret) {
			const signature = req.headers['x-firma-signature'] as string | undefined;
			const signatureOld = req.headers['x-firma-signature-old'] as string | undefined;

			if (!signature) {
				return { webhookResponse: 'Signature missing' };
			}

			const rawBody = JSON.stringify(body);
			const isValid = verifySignature(signature, rawBody, secret)
				|| (signatureOld ? verifySignature(signatureOld, rawBody, secret) : false);

			if (!isValid) {
				return { webhookResponse: 'Invalid signature' };
			}
		}

		return {
			workflowData: [this.helpers.returnJsonArray(body)],
		};
	}
}

function verifySignature(header: string, rawBody: string, secret: string): boolean {
	const parts: Record<string, string> = {};
	for (const pair of header.split(',')) {
		const [key, ...rest] = pair.split('=');
		parts[key] = rest.join('=');
	}

	const timestamp = parts['t'];
	const providedHash = parts['v1'];
	if (!timestamp || !providedHash) return false;

	const signedPayload = `${timestamp}.${rawBody}`;
	const expectedHash = createHmac('sha256', secret).update(signedPayload).digest('hex');

	try {
		return timingSafeEqual(Buffer.from(providedHash, 'hex'), Buffer.from(expectedHash, 'hex'));
	} catch {
		return false;
	}
}
