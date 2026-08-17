import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Resend',
	value: 'resend',
	description: 'Resend notification emails to specific recipients',
	action: 'Resend a signing request',
	routing: {
		request: {
			method: 'POST',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/resend',
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
				operation: ['resend'],
			},
		},
		description: 'The ID of the signing request to resend',
	},
	{
		displayName: 'Recipient IDs',
		name: 'recipientIds',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['resend'],
			},
		},
		description: 'Comma-separated list of recipient IDs to resend to (required)',
		routing: {
			send: {
				type: 'body',
				property: 'recipient_ids',
				value: '={{$value.split(",").map(id => id.trim())}}',
			},
		},
	},
	{
		displayName: 'Custom Message',
		name: 'customMessage',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['resend'],
			},
		},
		description: 'Optional custom message to include in the notification (max 1000 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'custom_message',
			},
		},
	},
];
