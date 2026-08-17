import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get',
	value: 'get',
	description: 'Retrieve a workspace by ID',
	action: 'Get a workspace',
	routing: {
		request: {
			method: 'GET',
			url: '=/workspaces/{{$parameter.workspaceId}}',
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
				operation: ['get'],
			},
		},
	},
];
