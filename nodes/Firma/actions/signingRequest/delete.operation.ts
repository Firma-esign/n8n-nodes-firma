import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete',
	value: 'delete',
	description: 'Soft-delete a signing request (must not be sent — use Cancel for sent requests)',
	action: 'Delete a signing request',
	routing: {
		request: {
			method: 'DELETE',
			url: '=/signing-requests/{{$parameter.signingRequestId}}',
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
				operation: ['delete'],
			},
		},
		description: 'The ID of the signing request to delete',
	},
];
