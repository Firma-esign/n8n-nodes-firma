import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Secret Status (Workspace)',
	value: 'secretStatusWorkspace',
	description: 'Get a workspace-level webhook secret status',
	action: 'Get workspace webhook secret status',
	routing: {
		request: {
			method: 'GET',
			url: '=/workspaces/{{$parameter.workspaceId}}/webhooks/secret-status',
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
				resource: ['webhook'],
				operation: ['secretStatusWorkspace'],
			},
		},
	},
];
