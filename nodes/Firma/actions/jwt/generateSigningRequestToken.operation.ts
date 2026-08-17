import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Generate Signing Request Token',
	value: 'generateSigningRequestToken',
	description: 'Generate a JWT for embedding the signing view',
	action: 'Generate signing request token',
	routing: {
		request: {
			method: 'POST',
			url: '/jwt/generate-signing-request',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Signing Request ID',
		name: 'signingRequestId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['jwt'],
				operation: ['generateSigningRequestToken'],
			},
		},
		routing: {
			send: { type: 'body', property: 'signing_request_id' },
		},
	},
];
