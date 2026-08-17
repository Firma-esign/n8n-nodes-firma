import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Create Custom Field',
	value: 'createCustomField',
	description: 'Create a custom field in a workspace',
	action: 'Create workspace custom field',
	routing: {
		request: {
			method: 'POST',
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
				operation: ['createCustomField'],
			},
		},
	},
	{
		displayName: 'Field Name',
		name: 'fieldName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['createCustomField'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Field Value',
		name: 'fieldValue',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['createCustomField'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},
];
