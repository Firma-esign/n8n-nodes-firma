import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List (Company)',
	value: 'listCompany',
	description: 'List company-scoped email templates',
	action: 'List company email templates',
	routing: {
		request: {
			method: 'GET',
			url: '/company/email-templates',
		},
	},
};

export const fields: INodeProperties[] = [];
