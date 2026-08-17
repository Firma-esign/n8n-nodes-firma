import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Revoke Template Token',
	value: 'revokeTemplateToken',
	description: 'Revoke a JWT for the template editor',
	action: 'Revoke template token',
	routing: {
		request: {
			method: 'POST',
			url: '/revoke-template-token',
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
				operation: ['revokeTemplateToken'],
			},
		},
		description: 'The JWT token to revoke',
		routing: {
			send: { type: 'body', property: 'token' },
		},
	},
];
