import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Upsert (Company)',
	value: 'upsertCompany',
	description: 'Create or update a company email template',
	action: 'Upsert company email template',
	routing: {
		request: {
			method: 'PUT',
			url: '=/company/email-templates/{{$parameter.emailType}}',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Email Type',
		name: 'emailType',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['emailTemplate'],
				operation: ['upsertCompany'],
			},
		},
		description: 'The email type identifier (e.g. signing_request, completion)',
	},
	{
		displayName: 'Template Fields',
		name: 'templateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['emailTemplate'],
				operation: ['upsertCompany'],
			},
		},
		options: [
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				routing: {
					send: { type: 'body', property: 'subject' },
				},
			},
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				typeOptions: { rows: 5 },
				default: '',
				routing: {
					send: { type: 'body', property: 'body' },
				},
			},
		],
	},
];
