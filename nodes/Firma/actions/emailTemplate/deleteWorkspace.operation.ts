import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete (Workspace)',
	value: 'deleteWorkspace',
	description: 'Delete a workspace email template',
	action: 'Delete workspace email template',
	routing: {
		request: {
			method: 'DELETE',
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
				operation: ['deleteWorkspace'],
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
				operation: ['deleteWorkspace'],
			},
		},
	},
];
