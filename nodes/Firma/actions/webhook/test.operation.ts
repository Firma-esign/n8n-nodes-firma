import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Test',
	value: 'test',
	description: 'Send a test delivery to a webhook (rate limited to 10/min)',
	action: 'Test a webhook',
	routing: {
		request: {
			method: 'POST',
			url: '=/webhooks/{{$parameter.webhookId}}/test',
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
				operation: ['test'],
			},
		},
	},
];
