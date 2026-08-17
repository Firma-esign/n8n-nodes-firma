import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

const PRODUCTION_BASE_URL = 'https://api.firma.dev/functions/v1/signing-request-api';

export class FirmaApi implements ICredentialType {
	name = 'firmaApi';
	displayName = 'Firma API';
	documentationUrl = 'https://docs.firma.dev/api-reference';
	icon = { light: 'file:firma.svg', dark: 'file:firma.dark.svg' } as const;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Firma workspace API key. Found in Workspace Settings → API.',
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{ name: 'Production', value: 'production' },
				{ name: 'Custom', value: 'custom' },
			],
			default: 'production',
			description: 'Select Custom only for self-hosted or staging environments',
		},
		{
			displayName: 'Custom Base URL',
			name: 'customBaseUrl',
			type: 'string',
			default: '',
			displayOptions: {
				show: { environment: ['custom'] },
			},
			description: 'Full base URL including path prefix (e.g. https://your-host/functions/v1/signing-request-api)',
		},
		{
			displayName: 'Webhook Secret',
			name: 'webhookSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Webhook signing secret for trigger node signature validation. Obtain via POST /webhooks/rotate-secret or from the Firma dashboard.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
				'X-API-Version': '1',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: `={{$credentials.environment === "custom" ? $credentials.customBaseUrl : "${PRODUCTION_BASE_URL}"}}`,
			url: '/workspaces',
			method: 'GET',
		},
	};
}
