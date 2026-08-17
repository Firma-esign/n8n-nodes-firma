import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get (Workspace)',
	value: 'getWorkspace',
	description: 'Get a workspace email template by type',
	action: 'Get workspace email template',
	routing: {
		request: {
			method: 'GET',
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
				operation: ['getWorkspace'],
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
				operation: ['getWorkspace'],
			},
		},
	},
];
