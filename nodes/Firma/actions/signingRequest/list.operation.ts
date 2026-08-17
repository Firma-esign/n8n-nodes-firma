import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List',
	value: 'list',
	description: 'Get all signing requests',
	action: 'List signing requests',
	routing: {
		request: {
			method: 'GET',
			url: '/signing-requests',
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
				resource: ['signingRequest'],
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
				resource: ['signingRequest'],
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
				resource: ['signingRequest'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by name (partial match, case-insensitive)',
				routing: {
					send: {
						type: 'query',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'multiOptions',
				options: [
					{ name: 'Not Sent', value: 'not_sent' },
					{ name: 'In Progress', value: 'in_progress' },
					{ name: 'Finished', value: 'finished' },
					{ name: 'Cancelled', value: 'cancelled' },
					{ name: 'Deleted', value: 'deleted' },
					{ name: 'Expired', value: 'expired' },
				],
				default: [],
				description: 'Filter by status (comma-separated in API)',
				routing: {
					send: {
						type: 'query',
						property: 'status',
						value: '={{$value.join(",")}}',
					},
				},
			},
			{
				displayName: 'Signer Email',
				name: 'signerEmail',
				type: 'string',
				default: '',
				description: 'Filter by signer email (partial match)',
				routing: {
					send: {
						type: 'query',
						property: 'signer_email',
					},
				},
			},
			{
				displayName: 'Signer Name',
				name: 'signerName',
				type: 'string',
				default: '',
				description: 'Filter by signer name (partial match)',
				routing: {
					send: {
						type: 'query',
						property: 'signer_name',
					},
				},
			},
			{
				displayName: 'Created After',
				name: 'createdAfter',
				type: 'dateTime',
				default: '',
				description: 'Only return signing requests created after this date',
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
				description: 'Only return signing requests created before this date',
				routing: {
					send: {
						type: 'query',
						property: 'created_before',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{ name: 'Created On', value: 'created_on' },
					{ name: 'Name', value: 'name' },
					{ name: 'Expiration Hours', value: 'expiration_hours' },
					{ name: 'Sent On', value: 'sent_on' },
					{ name: 'Finished On', value: 'finished_on' },
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
				displayName: 'Exclude Deleted',
				name: 'excludeDeleted',
				type: 'boolean',
				default: false,
				description: 'Whether to exclude soft-deleted signing requests',
				routing: {
					send: {
						type: 'query',
						property: 'exclude_deleted',
						value: '={{$value ? "true" : ""}}',
					},
				},
			},
		],
	},
];
