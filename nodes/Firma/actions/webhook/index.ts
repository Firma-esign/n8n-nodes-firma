import type { INodeProperties } from 'n8n-workflow';

import * as list from './list.operation';
import * as create from './create.operation';
import * as get from './get.operation';
import * as update from './update.operation';
import * as deleteWh from './delete.operation';
import * as test from './test.operation';
import * as rotateSecretCompany from './rotateSecretCompany.operation';
import * as rotateSecretWorkspace from './rotateSecretWorkspace.operation';
import * as secretStatusCompany from './secretStatusCompany.operation';
import * as secretStatusWorkspace from './secretStatusWorkspace.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['webhook'],
		},
	},
	options: [
		list.description,
		create.description,
		get.description,
		update.description,
		deleteWh.description,
		test.description,
		rotateSecretCompany.description,
		rotateSecretWorkspace.description,
		secretStatusCompany.description,
		secretStatusWorkspace.description,
	],
	default: 'list',
};

export const fields: INodeProperties[] = [
	...list.fields,
	...create.fields,
	...get.fields,
	...update.fields,
	...deleteWh.fields,
	...test.fields,
	...rotateSecretCompany.fields,
	...rotateSecretWorkspace.fields,
	...secretStatusCompany.fields,
	...secretStatusWorkspace.fields,
];
