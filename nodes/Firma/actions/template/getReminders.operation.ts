import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Reminders',
	value: 'getReminders',
	description: 'Get the reminders configured for a template',
	action: 'Get template reminders',
	routing: {
		request: {
			method: 'GET',
			url: '=/templates/{{$parameter.templateId}}/reminders',
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
				operation: ['getReminders'],
			},
		},
	},
];
