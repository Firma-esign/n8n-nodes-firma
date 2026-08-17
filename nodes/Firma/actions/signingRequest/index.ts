import type { INodeProperties } from 'n8n-workflow';

import * as list from './list.operation';
import * as create from './create.operation';
import * as createAndSend from './createAndSend.operation';
import * as get from './get.operation';
import * as updateProperties from './updateProperties.operation';
import * as updateFull from './updateFull.operation';
import * as send from './send.operation';
import * as cancel from './cancel.operation';
import * as resend from './resend.operation';
import * as download from './download.operation';
import * as getAudit from './getAudit.operation';
import * as getUsers from './getUsers.operation';
import * as getFields from './getFields.operation';
import * as getReminders from './getReminders.operation';
import * as deleteSr from './delete.operation';
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
			resource: ['signingRequest'],
		},
	},
	options: [
		list.description,
		create.description,
		createAndSend.description,
		get.description,
		updateProperties.description,
		updateFull.description,
		send.description,
		cancel.description,
		resend.description,
		download.description,
		getAudit.description,
		getUsers.description,
		getFields.description,
		getReminders.description,
		deleteSr.description,
		listCustomFields.description,
		createCustomField.description,
		deleteCustomField.description,
	],
	default: 'list',
};

export const fields: INodeProperties[] = [
	...list.fields,
	...create.fields,
	...createAndSend.fields,
	...get.fields,
	...updateProperties.fields,
	...updateFull.fields,
	...send.fields,
	...cancel.fields,
	...resend.fields,
	...download.fields,
	...getAudit.fields,
	...getUsers.fields,
	...getFields.fields,
	...getReminders.fields,
	...deleteSr.fields,
	...listCustomFields.fields,
	...createCustomField.fields,
	...deleteCustomField.fields,
];
