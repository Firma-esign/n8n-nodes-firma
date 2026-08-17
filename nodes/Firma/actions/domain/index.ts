import type { INodeProperties } from 'n8n-workflow';

import * as list from './list.operation';
import * as add from './add.operation';
import * as get from './get.operation';
import * as deleteDomain from './deleteDomain.operation';
import * as verifyDns from './verifyDns.operation';
import * as verifyOwnership from './verifyOwnership.operation';
import * as finalize from './finalize.operation';
import * as setPrimary from './setPrimary.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['domain'],
		},
	},
	options: [
		list.description,
		add.description,
		get.description,
		deleteDomain.description,
		verifyDns.description,
		verifyOwnership.description,
		finalize.description,
		setPrimary.description,
	],
	default: 'list',
};

export const fields: INodeProperties[] = [
	...list.fields,
	...add.fields,
	...get.fields,
	...deleteDomain.fields,
	...verifyDns.fields,
	...verifyOwnership.fields,
	...finalize.fields,
	...setPrimary.fields,
];
