import type { INodeProperties } from 'n8n-workflow';

import * as generateTemplateToken from './generateTemplateToken.operation';
import * as revokeTemplateToken from './revokeTemplateToken.operation';
import * as generateSigningRequestToken from './generateSigningRequestToken.operation';
import * as revokeSigningRequestToken from './revokeSigningRequestToken.operation';

export const operationSelector: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['jwt'],
		},
	},
	options: [
		generateTemplateToken.description,
		revokeTemplateToken.description,
		generateSigningRequestToken.description,
		revokeSigningRequestToken.description,
	],
	default: 'generateTemplateToken',
};

export const fields: INodeProperties[] = [
	...generateTemplateToken.fields,
	...revokeTemplateToken.fields,
	...generateSigningRequestToken.fields,
	...revokeSigningRequestToken.fields,
];
