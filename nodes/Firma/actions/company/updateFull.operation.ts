import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update (Full)',
	value: 'updateFull',
	description: 'Full update of company details (PUT)',
	action: 'Full update company',
	routing: {
		request: {
			method: 'PUT',
			url: '/company',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['updateFull'],
			},
		},
		description: 'Company name',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
