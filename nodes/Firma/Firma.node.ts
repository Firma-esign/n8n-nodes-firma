import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

import * as signingRequest from './actions/signingRequest';
import * as template from './actions/template';
import * as webhook from './actions/webhook';
import * as workspace from './actions/workspace';
import * as company from './actions/company';
import * as domain from './actions/domain';
import * as emailTemplate from './actions/emailTemplate';
import * as jwt from './actions/jwt';

export class Firma implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Firma',
		name: 'firma',
		icon: { light: 'file:firma.svg', dark: 'file:firma.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Firma e-signature API',
		defaults: {
			name: 'Firma',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'firmaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.environment === "custom" ? $credentials.customBaseUrl : "https://api.firma.dev/functions/v1/signing-request-api"}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Company', value: 'company' },
					{ name: 'Domain', value: 'domain' },
					{ name: 'Email Template', value: 'emailTemplate' },
					{ name: 'JWT', value: 'jwt' },
					{ name: 'Signing Request', value: 'signingRequest' },
					{ name: 'Template', value: 'template' },
					{ name: 'Webhook', value: 'webhook' },
					{ name: 'Workspace', value: 'workspace' },
				],
				default: 'signingRequest',
			},
			company.operationSelector,
			...company.fields,
			domain.operationSelector,
			...domain.fields,
			emailTemplate.operationSelector,
			...emailTemplate.fields,
			jwt.operationSelector,
			...jwt.fields,
			signingRequest.operationSelector,
			...signingRequest.fields,
			template.operationSelector,
			...template.fields,
			webhook.operationSelector,
			...webhook.fields,
			workspace.operationSelector,
			...workspace.fields,
		],
	};
}
