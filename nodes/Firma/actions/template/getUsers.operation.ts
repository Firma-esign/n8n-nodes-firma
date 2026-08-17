import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Users',
	value: 'getUsers',
	description: 'Get the recipients/users of a template',
	action: 'Get template users',
	routing: {
		request: {
			method: 'GET',
			url: '=/templates/{{$parameter.templateId}}/users',
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
				operation: ['getUsers'],
			},
		},
	},
];
