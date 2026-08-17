import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Send',
	value: 'send',
	description: 'Send a signing request to its recipients',
	action: 'Send a signing request',
	routing: {
		request: {
			method: 'POST',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/send',
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
				operation: ['send'],
			},
		},
		description: 'The ID of the signing request to send',
	},
];
