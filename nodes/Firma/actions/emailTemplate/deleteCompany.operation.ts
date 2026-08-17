import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete (Company)',
	value: 'deleteCompany',
	description: 'Delete a company email template',
	action: 'Delete company email template',
	routing: {
		request: {
			method: 'DELETE',
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
				operation: ['deleteCompany'],
			},
		},
		description: 'The email type identifier to delete',
	},
];
