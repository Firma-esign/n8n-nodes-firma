import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete Custom Field',
	value: 'deleteCustomField',
	description: 'Remove a custom field from a signing request',
	action: 'Delete custom field',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/signing-requests/{{$parameter.signingRequestId}}/custom-fields/{{$parameter.customFieldId}}',
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
				operation: ['deleteCustomField'],
			},
		},
	},
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['deleteCustomField'],
			},
		},
		description: 'The ID of the custom field to delete',
	},
];
