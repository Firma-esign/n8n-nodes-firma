import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

import { firmaPagination } from '../../GenericFunctions';

export const description: INodePropertyOptions = {
	name: 'List',
	value: 'list',
	description: 'Get all templates',
	action: 'List templates',
	routing: {
		request: {
			method: 'GET',
			url: '/templates',
		},
		send: {
			paginate: '={{ $parameter["returnAll"] }}',
		},
		operations: firmaPagination,
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
				resource: ['template'],
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
		},
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['list'],
				returnAll: [false],
			},
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'page_size',
			},
		},
	},
];
