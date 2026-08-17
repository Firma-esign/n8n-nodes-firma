import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get',
	value: 'get',
	description: 'Retrieve a webhook by ID',
	action: 'Get a webhook',
	routing: {
		request: {
			method: 'GET',
			url: '=/webhooks/{{$parameter.webhookId}}',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['get'],
			},
		},
	},
];
