import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Create',
	value: 'create',
	description: 'Create a new workspace',
	action: 'Create a workspace',
	routing: {
		request: {
			method: 'POST',
			url: '/workspaces',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['create'],
			},
		},
		description: 'Workspace name (1-255 characters, sanitized to 200)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
