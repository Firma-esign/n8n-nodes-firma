import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Get Audit Trail',
	value: 'getAudit',
	description: 'Get the audit trail for a signing request',
	action: 'Get audit trail',
	routing: {
		request: {
			method: 'GET',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/audit',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Signing Request ID',
		name: 'signingRequestId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['getAudit'],
			},
		},
	},
];
