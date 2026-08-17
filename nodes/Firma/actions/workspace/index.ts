import type { INodeProperties } from 'n8n-workflow';

import * as list from './list.operation';
import * as create from './create.operation';
import * as get from './get.operation';
import * as updatePartial from './updatePartial.operation';
import * as updateFull from './updateFull.operation';
import * as getSettings from './getSettings.operation';
import * as updateSettings from './updateSettings.operation';
import * as apiKeyRegenerate from './apiKeyRegenerate.operation';
import * as apiKeyExpire from './apiKeyExpire.operation';
import * as listCustomFields from './listCustomFields.operation';
import * as createCustomField from './createCustomField.operation';
import * as updateCustomField from './updateCustomField.operation';
import * as deleteCustomField from './deleteCustomField.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['workspace'],
		},
	},
	options: [
		list.description,
		create.description,
		get.description,
		updatePartial.description,
		updateFull.description,
		getSettings.description,
		updateSettings.description,
		apiKeyRegenerate.description,
		apiKeyExpire.description,
		listCustomFields.description,
		createCustomField.description,
		updateCustomField.description,
		deleteCustomField.description,
	],
	default: 'list',
};

export const fields: INodeProperties[] = [
	...list.fields,
	...create.fields,
	...get.fields,
	...updatePartial.fields,
	...updateFull.fields,
	...getSettings.fields,
	...updateSettings.fields,
	...apiKeyRegenerate.fields,
	...apiKeyExpire.fields,
	...listCustomFields.fields,
	...createCustomField.fields,
	...updateCustomField.fields,
	...deleteCustomField.fields,
];
