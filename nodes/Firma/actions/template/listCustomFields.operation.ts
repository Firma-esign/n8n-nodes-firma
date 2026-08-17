import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List Custom Fields',
	value: 'listCustomFields',
	description: 'List custom fields on a template',
	action: 'List template custom fields',
	routing: {
		request: {
			method: 'GET',
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
				operation: ['listCustomFields'],
			},
		},
	},
];
