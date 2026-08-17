import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete',
	value: 'delete',
	description: 'Delete a template',
	action: 'Delete a template',
	routing: {
		request: {
			method: 'DELETE',
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
				operation: ['delete'],
			},
		},
		description: 'The ID of the template to delete',
	},
];
