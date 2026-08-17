import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Settings',
	value: 'getSettings',
	description: 'Get workspace settings',
	action: 'Get workspace settings',
	routing: {
		request: {
			method: 'GET',
			url: '=/workspace/{{$parameter.workspaceId}}/settings',
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
				operation: ['getSettings'],
			},
		},
	},
];
