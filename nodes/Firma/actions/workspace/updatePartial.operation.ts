import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update (Partial)',
	value: 'updatePartial',
	description: 'Partially update a workspace (PATCH)',
	action: 'Partially update a workspace',
	routing: {
		request: {
			method: 'PATCH',
			url: '=/workspaces/{{$parameter.workspaceId}}',
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
				operation: ['updatePartial'],
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
				resource: ['workspace'],
				operation: ['updatePartial'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
		],
	},
];
