import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Upsert (Workspace)',
	value: 'upsertWorkspace',
	description: 'Create or update a workspace email template',
	action: 'Upsert workspace email template',
	routing: {
		request: {
			method: 'PUT',
			url: '=/workspace/{{$parameter.workspaceId}}/email-templates/{{$parameter.emailType}}',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['emailTemplate'],
				operation: ['upsertWorkspace'],
			},
		},
	},
	{
		displayName: 'Email Type',
		name: 'emailType',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['emailTemplate'],
				operation: ['upsertWorkspace'],
			},
		},
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
				operation: ['upsertWorkspace'],
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
