import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update Custom Field',
	value: 'updateCustomField',
	description: 'Update a custom field in a workspace',
	action: 'Update workspace custom field',
	routing: {
		request: {
			method: 'PUT',
			url: '=/workspace/{{$parameter.workspaceId}}/custom-fields/{{$parameter.customFieldId}}',
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
				operation: ['updateCustomField'],
			},
		},
	},
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['updateCustomField'],
			},
		},
	},
	{
		displayName: 'Field Name',
		name: 'fieldName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['updateCustomField'],
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
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['updateCustomField'],
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
