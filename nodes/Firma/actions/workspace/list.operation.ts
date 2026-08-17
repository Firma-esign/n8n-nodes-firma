import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List',
	value: 'list',
	description: 'Get all workspaces',
	action: 'List workspaces',
	routing: {
		request: {
			method: 'GET',
			url: '/workspaces',
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
				resource: ['workspace'],
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
				resource: ['workspace'],
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
				resource: ['workspace'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by name (partial match)',
				routing: {
					send: {
						type: 'query',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{ name: 'Name', value: 'name' },
					{ name: 'Protected', value: 'protected' },
					{ name: 'Created On', value: 'created_on' },
				],
				default: 'created_on',
				routing: {
					send: {
						type: 'query',
						property: 'sort_by',
					},
				},
			},
			{
				displayName: 'Sort Order',
				name: 'sortOrder',
				type: 'options',
				options: [
					{ name: 'Descending', value: 'desc' },
					{ name: 'Ascending', value: 'asc' },
				],
				default: 'desc',
				routing: {
					send: {
						type: 'query',
						property: 'sort_order',
					},
				},
			},
			{
				displayName: 'Created After',
				name: 'createdAfter',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'query',
						property: 'created_after',
					},
				},
			},
			{
				displayName: 'Created Before',
				name: 'createdBefore',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'query',
						property: 'created_before',
					},
				},
			},
		],
	},
];
