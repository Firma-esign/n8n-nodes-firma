import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Create',
	value: 'create',
	description: 'Create a new template',
	action: 'Create a template',
	routing: {
		request: {
			method: 'POST',
			url: '/templates',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['create'],
			},
		},
		description: 'Name of the template (1-255 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
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
				operation: ['create'],
			},
		},
		description: 'Name of the binary property containing the PDF or DOCX file to upload as base64',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Expiration Hours',
				name: 'expirationHours',
				type: 'number',
				default: 0,
				description: 'Hours until signing requests created from this template expire',
				routing: {
					send: {
						type: 'body',
						property: 'expiration_hours',
					},
				},
			},
		],
	},
	{
		displayName: 'Settings',
		name: 'settings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Attach PDF on Finish',
				name: 'attach_pdf_on_finish',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Allow Download',
				name: 'allow_download',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Allow Pre-Signing Download',
				name: 'allow_presigning_download',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Hand Drawn Only',
				name: 'hand_drawn_only',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Require OTP Verification',
				name: 'require_otp_verification',
				type: 'boolean',
				default: false,
			},
		],
	},
];
