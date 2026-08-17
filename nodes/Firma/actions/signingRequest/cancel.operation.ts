import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Cancel',
	value: 'cancel',
	description: 'Cancel a sent signing request',
	action: 'Cancel a signing request',
	routing: {
		request: {
			method: 'POST',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/cancel',
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
				operation: ['cancel'],
			},
		},
		description: 'The ID of the signing request to cancel',
	},
	{
		displayName: 'Reason',
		name: 'reason',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['cancel'],
			},
		},
		description: 'Optional reason for cancellation (max 500 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'reason',
			},
		},
	},
	{
		displayName: 'Notify Signers',
		name: 'notifySigners',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['cancel'],
			},
		},
		description: 'Whether to notify signers about the cancellation',
		routing: {
			send: {
				type: 'body',
				property: 'notify_signers',
			},
		},
	},
];
