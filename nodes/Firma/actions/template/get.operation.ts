import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get',
	value: 'get',
	description: 'Retrieve a template by ID',
	action: 'Get a template',
	routing: {
		request: {
			method: 'GET',
			url: '=/templates/{{$parameter.templateId}}',
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
				operation: ['get'],
			},
		},
		description: 'The ID of the template to retrieve',
	},
];
