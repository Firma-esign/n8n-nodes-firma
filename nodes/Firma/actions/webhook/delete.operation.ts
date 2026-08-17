import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete',
	value: 'delete',
	description: 'Soft-delete a webhook',
	action: 'Delete a webhook',
	routing: {
		request: {
			method: 'DELETE',
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
				operation: ['delete'],
			},
		},
	},
];
