import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Revoke Signing Request Token',
	value: 'revokeSigningRequestToken',
	description: 'Revoke a JWT for the signing view',
	action: 'Revoke signing request token',
	routing: {
		request: {
			method: 'POST',
			url: '/jwt/revoke-signing-request',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		typeOptions: { password: true },
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['jwt'],
				operation: ['revokeSigningRequestToken'],
			},
		},
		description: 'The JWT token to revoke',
		routing: {
			send: { type: 'body', property: 'token' },
		},
	},
];
