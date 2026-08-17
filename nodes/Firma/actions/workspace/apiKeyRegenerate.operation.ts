import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Regenerate API Key',
	value: 'apiKeyRegenerate',
	description: 'Regenerate the API key for a workspace (rate limited to 1/min)',
	action: 'Regenerate workspace API key',
	routing: {
		request: {
			method: 'POST',
			url: '=/workspaces/{{$parameter.workspaceId}}/api-key/regenerate',
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
				operation: ['apiKeyRegenerate'],
			},
		},
	},
];
