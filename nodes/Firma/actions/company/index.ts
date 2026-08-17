import type { INodeProperties } from 'n8n-workflow';

import * as get from './get.operation';
import * as updatePartial from './updatePartial.operation';
import * as updateFull from './updateFull.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['company'],
		},
	},
	options: [
		get.description,
		updatePartial.description,
		updateFull.description,
	],
	default: 'get',
};

export const fields: INodeProperties[] = [
	...get.fields,
	...updatePartial.fields,
	...updateFull.fields,
];
