import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Rotate Secret (Workspace)',
	value: 'rotateSecretWorkspace',
	description: 'Rotate a workspace-level webhook signing secret (1-hour cooldown)',
	action: 'Rotate workspace webhook secret',
	routing: {
		request: {
			method: 'POST',
			url: '=/workspaces/{{$parameter.workspaceId}}/webhooks/rotate-secret',
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
				resource: ['webhook'],
				operation: ['rotateSecretWorkspace'],
			},
		},
	},
];
