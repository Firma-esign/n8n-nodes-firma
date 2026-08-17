import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get',
	value: 'get',
	description: 'Get company details',
	action: 'Get company',
	routing: {
		request: {
			method: 'GET',
			url: '/company',
		},
	},
};

export const fields: INodeProperties[] = [];
