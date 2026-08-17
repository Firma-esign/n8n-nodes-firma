import type { INodeProperties } from 'n8n-workflow';

import * as list from './list.operation';
import * as create from './create.operation';
import * as get from './get.operation';
import * as updateProperties from './updateProperties.operation';
import * as updateFull from './updateFull.operation';
import * as deleteTemplate from './delete.operation';
import * as duplicate from './duplicate.operation';
import * as replaceDocument from './replaceDocument.operation';
import * as getFields from './getFields.operation';
import * as getUsers from './getUsers.operation';
import * as getReminders from './getReminders.operation';
import * as listCustomFields from './listCustomFields.operation';
import * as createCustomField from './createCustomField.operation';
import * as deleteCustomField from './deleteCustomField.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['template'],
		},
	},
	options: [
		list.description,
		create.description,
		get.description,
		updateProperties.description,
		updateFull.description,
		deleteTemplate.description,
		duplicate.description,
		replaceDocument.description,
		getFields.description,
		getUsers.description,
		getReminders.description,
		listCustomFields.description,
		createCustomField.description,
		deleteCustomField.description,
	],
	default: 'list',
};

export const fields: INodeProperties[] = [
	...list.fields,
	...create.fields,
	...get.fields,
	...updateProperties.fields,
	...updateFull.fields,
	...deleteTemplate.fields,
	...duplicate.fields,
	...replaceDocument.fields,
	...getFields.fields,
	...getUsers.fields,
	...getReminders.fields,
	...listCustomFields.fields,
	...createCustomField.fields,
	...deleteCustomField.fields,
];
