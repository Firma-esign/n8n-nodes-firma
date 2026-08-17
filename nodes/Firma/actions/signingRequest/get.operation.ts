import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get',
	value: 'get',
	description: 'Retrieve a signing request by ID',
	action: 'Get a signing request',
	routing: {
		request: {
			method: 'GET',
			url: '=/signing-requests/{{$parameter.signingRequestId}}',
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
				operation: ['get'],
			},
		},
		description: 'The ID of the signing request to retrieve',
	},
];
