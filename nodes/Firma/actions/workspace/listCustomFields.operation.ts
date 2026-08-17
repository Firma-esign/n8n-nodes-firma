import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List Custom Fields',
	value: 'listCustomFields',
	description: 'List custom fields for a workspace',
	action: 'List workspace custom fields',
	routing: {
		request: {
			method: 'GET',
			url: '=/workspace/{{$parameter.workspaceId}}/custom-fields',
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
				operation: ['listCustomFields'],
			},
		},
	},
];
