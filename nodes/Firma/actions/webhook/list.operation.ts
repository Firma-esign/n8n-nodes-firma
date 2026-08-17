import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List',
	value: 'list',
	description: 'Get all webhooks. Without workspace_id, returns ONLY company-scoped webhooks.',
	action: 'List webhooks',
	routing: {
		request: {
			method: 'GET',
			url: '/webhooks',
		},
		output: {
			postReceive: [
				{
					type: 'rootProperty',
					properties: {
						property: 'results',
					},
				},
			],
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['list'],
			},
		},
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['list'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return (1-200)',
		routing: {
			send: {
				type: 'query',
				property: 'page_size',
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',
				type: 'string',
				default: '',
				description: 'Filter by workspace. Without this, only company-scoped webhooks are returned.',
				routing: {
					send: {
						type: 'query',
						property: 'workspace_id',
					},
				},
			},
		],
	},
];
