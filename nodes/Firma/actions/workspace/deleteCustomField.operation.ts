import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete Custom Field',
	value: 'deleteCustomField',
	description: 'Delete a custom field from a workspace',
	action: 'Delete workspace custom field',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/workspace/{{$parameter.workspaceId}}/custom-fields/{{$parameter.customFieldId}}',
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
				resource: ['workspace'],
				operation: ['deleteCustomField'],
			},
		},
	},
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['deleteCustomField'],
			},
		},
	},
];
