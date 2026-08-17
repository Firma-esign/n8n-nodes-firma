import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Secret Status (Company)',
	value: 'secretStatusCompany',
	description: 'Get the company-level webhook secret status',
	action: 'Get company webhook secret status',
	routing: {
		request: {
			method: 'GET',
			url: '/webhooks/secret-status',
		},
	},
};

export const fields: INodeProperties[] = [];
