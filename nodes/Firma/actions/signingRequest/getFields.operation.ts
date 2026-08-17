import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Fields',
	value: 'getFields',
	description: 'Get the fields of a signing request',
	action: 'Get signing request fields',
	routing: {
		request: {
			method: 'GET',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/fields',
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
				operation: ['getFields'],
			},
		},
	},
];
