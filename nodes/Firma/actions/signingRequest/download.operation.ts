import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Download',
	value: 'download',
	description: 'Get a signed URL to download the signing request document',
	action: 'Download a signing request',
	routing: {
		request: {
			method: 'GET',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/download',
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
				operation: ['download'],
			},
		},
		description: 'The ID of the signing request to download. Returns a signed URL, not binary data.',
	},
];
