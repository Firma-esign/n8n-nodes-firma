import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update (Full)',
	value: 'updateFull',
	description: 'Full update of a signing request (PUT)',
	action: 'Full update a signing request',
	routing: {
		request: {
			method: 'PUT',
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
				operation: ['updateFull'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['updateFull'],
			},
		},
		description: 'Name of the signing request (1-255 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['updateFull'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Expiration Hours',
				name: 'expirationHours',
				type: 'number',
				default: 0,
				routing: {
					send: {
						type: 'body',
						property: 'expiration_hours',
					},
				},
			},
		],
	},
];
