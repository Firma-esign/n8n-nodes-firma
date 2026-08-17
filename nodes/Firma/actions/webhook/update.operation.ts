import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update',
	value: 'update',
	description: 'Update a webhook',
	action: 'Update a webhook',
	routing: {
		request: {
			method: 'PUT',
			url: '=/webhooks/{{$parameter.webhookId}}',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'HTTPS webhook URL',
				routing: {
					send: {
						type: 'body',
						property: 'url',
					},
				},
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
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
				routing: {
					send: {
						type: 'body',
						property: 'events',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'boolean',
				default: true,
				description: 'Whether the webhook is enabled. Setting to true resets consecutive failures.',
				routing: {
					send: {
						type: 'body',
						property: 'enabled',
					},
				},
			},
		],
	},
];
