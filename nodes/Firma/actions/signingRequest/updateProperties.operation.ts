import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update Properties',
	value: 'updateProperties',
	description: 'Update signing request properties (name, description, expiration, settings)',
	action: 'Update signing request properties',
	routing: {
		request: {
			method: 'PATCH',
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
				operation: ['updateProperties'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signingRequest'],
				operation: ['updateProperties'],
			},
		},
		options: [
			{
				displayName: 'Allow Download',
				name: 'allowDownload',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'settings.allow_download',
					},
				},
			},
			{
				displayName: 'Attach PDF on Finish',
				name: 'attachPdfOnFinish',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'settings.attach_pdf_on_finish',
					},
				},
			},
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
				description: 'Hours until the signing request expires',
				routing: {
					send: {
						type: 'body',
						property: 'expiration_hours',
					},
				},
			},
			{
				displayName: 'Hand Drawn Only',
				name: 'handDrawnOnly',
				type: 'boolean',
				default: false,
				description: 'Whether to require hand-drawn signatures only',
				routing: {
					send: {
						type: 'body',
						property: 'settings.hand_drawn_only',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'New name for the signing request (1-255 characters)',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Require OTP Verification',
				name: 'requireOtpVerification',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'settings.require_otp_verification',
					},
				},
			},
		],
	},
];
