import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update Properties',
	value: 'updateProperties',
	description: 'Update template properties (name, description, expiration, settings)',
	action: 'Update template properties',
	routing: {
		request: {
			method: 'PATCH',
			url: '=/templates/{{$parameter.templateId}}',
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
				operation: ['updateProperties'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['updateProperties'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'New name for the template (1-255 characters)',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
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
