import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Reminders',
	value: 'getReminders',
	description: 'Get the reminders configured for a signing request',
	action: 'Get signing request reminders',
	routing: {
		request: {
			method: 'GET',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/reminders',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Signing Request ID',
		name: 'signingRequestId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['getReminders'],
			},
		},
	},
];
