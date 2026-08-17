import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List (Workspace)',
	value: 'listWorkspace',
	description: 'List workspace-scoped email templates',
	action: 'List workspace email templates',
	routing: {
		request: {
			method: 'GET',
			url: '=/workspace/{{$parameter.workspaceId}}/email-templates',
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
				resource: ['emailTemplate'],
				operation: ['listWorkspace'],
			},
		},
	},
];
