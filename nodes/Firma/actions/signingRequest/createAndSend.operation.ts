import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Create and Send',
	value: 'createAndSend',
	description: 'Create and immediately send a signing request (atomic with rollback)',
	action: 'Create and send a signing request',
	routing: {
		request: {
			method: 'POST',
			url: '/signing-requests/create-and-send',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['createAndSend'],
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
				operation: ['createAndSend'],
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
				description: 'Hours until the signing request expires (0 = company default)',
				routing: {
					send: {
						type: 'body',
						property: 'expiration_hours',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'options',
				options: [
					{ name: 'Czech', value: 'cs' },
					{ name: 'Dutch', value: 'nl' },
					{ name: 'English', value: 'en' },
					{ name: 'French', value: 'fr' },
					{ name: 'German', value: 'de' },
					{ name: 'Greek', value: 'el' },
					{ name: 'Italian', value: 'it' },
					{ name: 'Norwegian Bokmal', value: 'nb' },
					{ name: 'Polish', value: 'pl' },
					{ name: 'Portuguese', value: 'pt' },
					{ name: 'Romanian', value: 'ro' },
					{ name: 'Russian', value: 'ru' },
					{ name: 'Spanish', value: 'es' },
					{ name: 'Swedish', value: 'sv' },
				],
				default: 'en',
				routing: {
					send: {
						type: 'body',
						property: 'language',
					},
				},
			},
		],
	},
];
