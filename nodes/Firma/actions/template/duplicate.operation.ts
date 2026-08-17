import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Duplicate to Signing Request',
	value: 'duplicate',
	description: 'Create a signing request from this template',
	action: 'Duplicate template to signing request',
	routing: {
		request: {
			method: 'POST',
			url: '=/templates/{{$parameter.templateId}}/duplicate',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['duplicate'],
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
				resource: ['template'],
				operation: ['duplicate'],
			},
		},
		description: 'Name for the new signing request (required)',
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
				resource: ['template'],
				operation: ['duplicate'],
			},
		},
		options: [
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
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',
				type: 'string',
				default: '',
				description: 'Target workspace for the new signing request',
				routing: {
					send: {
						type: 'body',
						property: 'workspace_id',
					},
				},
			},
		],
	},
];
