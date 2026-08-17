import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete Custom Field',
	value: 'deleteCustomField',
	description: 'Remove a custom field from a template',
	action: 'Delete template custom field',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/templates/{{$parameter.templateId}}/custom-fields/{{$parameter.customFieldId}}',
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
				operation: ['deleteCustomField'],
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
				resource: ['template'],
				operation: ['deleteCustomField'],
			},
		},
		description: 'The ID of the custom field to delete',
	},
];
