import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Generate Template Token',
	value: 'generateTemplateToken',
	description: 'Generate a JWT for embedding the template editor',
	action: 'Generate template token',
	routing: {
		request: {
			method: 'POST',
			url: '/generate-template-token',
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
				resource: ['jwt'],
				operation: ['generateTemplateToken'],
			},
		},
		routing: {
			send: { type: 'body', property: 'template_id' },
		},
	},
];
