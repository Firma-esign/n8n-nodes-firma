import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

import { buildRequestBody } from '../../GenericFunctions';

export const description: INodePropertyOptions = {
	name: 'Replace Document',
	value: 'replaceDocument',
	description: 'Replace the document of a template',
	action: 'Replace template document',
	routing: {
		request: {
			method: 'POST',
			url: '=/templates/{{$parameter.templateId}}/replace-document',
		},
		send: {
			preSend: [buildRequestBody],
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['replaceDocument'],
			},
		},
	},
	{
		displayName: 'Binary Property',
		name: 'binaryProperty',
		type: 'string',
		required: true,
		default: 'data',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['replaceDocument'],
			},
		},
		description: 'Name of the binary property containing the PDF or DOCX file to upload as base64',
	},
];
