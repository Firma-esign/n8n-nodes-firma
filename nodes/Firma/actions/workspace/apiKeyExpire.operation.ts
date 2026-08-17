import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Expire API Key',
	value: 'apiKeyExpire',
	description: 'Expire the API key for a workspace',
	action: 'Expire workspace API key',
	routing: {
		request: {
			method: 'POST',
			url: '=/workspaces/{{$parameter.workspaceId}}/api-key/expire',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['apiKeyExpire'],
			},
		},
	},
];
