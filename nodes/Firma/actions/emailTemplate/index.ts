import type { INodeProperties } from 'n8n-workflow';

import * as listCompany from './listCompany.operation';
import * as upsertCompany from './upsertCompany.operation';
import * as deleteCompany from './deleteCompany.operation';
import * as listWorkspace from './listWorkspace.operation';
import * as getWorkspace from './getWorkspace.operation';
import * as upsertWorkspace from './upsertWorkspace.operation';
import * as deleteWorkspace from './deleteWorkspace.operation';
import * as getDefaults from './getDefaults.operation';
import * as getPlaceholders from './getPlaceholders.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['emailTemplate'],
		},
	},
	options: [
		listCompany.description,
		upsertCompany.description,
		deleteCompany.description,
		listWorkspace.description,
		getWorkspace.description,
		upsertWorkspace.description,
		deleteWorkspace.description,
		getDefaults.description,
		getPlaceholders.description,
	],
	default: 'listCompany',
};

export const fields: INodeProperties[] = [
	...listCompany.fields,
	...upsertCompany.fields,
	...deleteCompany.fields,
	...listWorkspace.fields,
	...getWorkspace.fields,
	...upsertWorkspace.fields,
	...deleteWorkspace.fields,
	...getDefaults.fields,
	...getPlaceholders.fields,
];
