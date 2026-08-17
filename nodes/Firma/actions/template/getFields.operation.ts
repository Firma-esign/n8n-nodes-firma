import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Fields',
	value: 'getFields',
	description: 'Get the fields of a template',
	action: 'Get template fields',
	routing: {
		request: {
			method: 'GET',
			url: '=/templates/{{$parameter.templateId}}/fields',
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
				operation: ['getFields'],
			},
		},
	},
];
