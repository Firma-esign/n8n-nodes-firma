import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Defaults',
	value: 'getDefaults',
	description: 'Get default email templates for a language',
	action: 'Get default email templates',
	routing: {
		request: {
			method: 'GET',
			url: '=/email-templates/defaults/{{$parameter.language}}',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Language',
		name: 'language',
		type: 'options',
		required: true,
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
		displayOptions: {
			show: {
				resource: ['emailTemplate'],
				operation: ['getDefaults'],
			},
		},
	},
];
