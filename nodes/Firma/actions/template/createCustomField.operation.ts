import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Create Custom Field',
	value: 'createCustomField',
	description: 'Add a custom field to a template',
	action: 'Create template custom field',
	routing: {
		request: {
			method: 'POST',
			url: '=/templates/{{$parameter.templateId}}/custom-fields',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
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
				resource: ['template'],
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
				resource: ['template'],
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
