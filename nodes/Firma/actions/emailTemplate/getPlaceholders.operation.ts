import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Placeholders',
	value: 'getPlaceholders',
	description: 'Get available email template placeholders',
	action: 'Get email template placeholders',
	routing: {
		request: {
			method: 'GET',
			url: '/email-templates/placeholders',
		},
	},
};

export const fields: INodeProperties[] = [];
