import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Create',
	value: 'create',
	description: 'Create a new signing request (draft, not sent)',
	action: 'Create a signing request',
	routing: {
		request: {
			method: 'POST',
			url: '/signing-requests',
		},
	},
};

const documentSourceField: INodeProperties = {
	displayName: 'Document Source',
	name: 'documentSource',
	type: 'options',
	required: true,
	options: [
		{ name: 'Template', value: 'template' },
		{ name: 'Binary File', value: 'binary' },
		{ name: 'Existing Document ID', value: 'documentId' },
	],
	default: 'template',
	displayOptions: {
		show: {
			resource: ['signingRequest'],
			operation: ['create', 'createAndSend'],
		},
	},
	description: 'How to provide the document (exactly one source required)',
};

const templateIdField: INodeProperties = {
	displayName: 'Template ID',
	name: 'templateId',
	type: 'string',
	required: true,
	default: '',
	displayOptions: {
		show: {
			resource: ['signingRequest'],
			operation: ['create', 'createAndSend'],
			documentSource: ['template'],
		},
	},
	description: 'The ID of the template to use',
	routing: {
		send: {
			type: 'body',
			property: 'template_id',
		},
	},
};

const documentIdField: INodeProperties = {
	displayName: 'Document ID',
	name: 'documentId',
	type: 'string',
	required: true,
	default: '',
	displayOptions: {
		show: {
			resource: ['signingRequest'],
			operation: ['create', 'createAndSend'],
			documentSource: ['documentId'],
		},
	},
	description: 'The ID of an existing uploaded document',
	routing: {
		send: {
			type: 'body',
			property: 'document_id',
		},
	},
};

const binaryPropertyField: INodeProperties = {
	displayName: 'Binary Property',
	name: 'binaryProperty',
	type: 'string',
	required: true,
	default: 'data',
	displayOptions: {
		show: {
			resource: ['signingRequest'],
			operation: ['create', 'createAndSend'],
			documentSource: ['binary'],
		},
	},
	description: 'Name of the binary property containing the PDF or DOCX file to upload as base64',
};

const recipientsField: INodeProperties = {
	displayName: 'Recipients',
	name: 'recipients',
	type: 'fixedCollection',
	typeOptions: {
		multipleValues: true,
	},
	default: {},
	displayOptions: {
		show: {
			resource: ['signingRequest'],
			operation: ['create', 'createAndSend'],
		},
	},
	placeholder: 'Add Recipient',
	options: [
		{
			name: 'recipientValues',
			displayName: 'Recipient',
			values: [
				{
					displayName: 'First Name',
					name: 'first_name',
					type: 'string',
					required: true,
					default: '',
				},
				{
					displayName: 'Last Name',
					name: 'last_name',
					type: 'string',
					default: '',
					description: 'Required when using document source, optional with template',
				},
				{
					displayName: 'Email',
					name: 'email',
					type: 'string',
					placeholder: 'name@email.com',
					required: true,
					default: '',
				},
				{
					displayName: 'Designation',
					name: 'designation',
					type: 'options',
					options: [
						{ name: 'Signer', value: 'signer' },
						{ name: 'Approver', value: 'approver' },
						{ name: 'CC', value: 'cc' },
					],
					default: 'signer',
				},
				{
					displayName: 'Order',
					name: 'order',
					type: 'number',
					default: 0,
					description: 'Signing order (0 = auto-assigned)',
				},
				{
					displayName: 'Phone Number',
					name: 'phone_number',
					type: 'string',
					default: '',
				},
				{
					displayName: 'Company',
					name: 'company',
					type: 'string',
					default: '',
					description: 'Company name (note: use "company" not "company_name")',
				},
				{
					displayName: 'Title',
					name: 'title',
					type: 'string',
					default: '',
				},
			],
		},
	],
};

const settingsField: INodeProperties = {
	displayName: 'Settings',
	name: 'settings',
	type: 'collection',
	placeholder: 'Add Setting',
	default: {},
	displayOptions: {
		show: {
			resource: ['signingRequest'],
			operation: ['create', 'createAndSend'],
		},
	},
	options: [
		{
			displayName: 'Attach PDF on Finish',
			name: 'attach_pdf_on_finish',
			type: 'boolean',
			default: false,
			description: 'Whether to attach the signed PDF to the completion email',
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
			displayName: 'Show QR Code',
			name: 'show_qr_code',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'Use Signing Order',
			name: 'use_signing_order',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'Send Signing Email',
			name: 'send_signing_email',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Send Finish Email',
			name: 'send_finish_email',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Send Expiration Email',
			name: 'send_expiration_email',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Send Cancellation Email',
			name: 'send_cancellation_email',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Require OTP Verification',
			name: 'require_otp_verification',
			type: 'boolean',
			default: false,
		},
		{
			displayName: 'Disable Guided Navigation',
			name: 'disable_guided_navigation',
			type: 'boolean',
			default: false,
		},
	],
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
				resource: ['signingRequest'],
				operation: ['create'],
			},
		},
		description: 'Name of the signing request (1-255 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	documentSourceField,
	templateIdField,
	documentIdField,
	binaryPropertyField,
	recipientsField,
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['signingRequest'],
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
				description: 'Hours until the signing request expires (0 = company default)',
				routing: {
					send: {
						type: 'body',
						property: 'expiration_hours',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'options',
				options: [
					{ name: 'Czech', value: 'cs' },
					{ name: 'Dutch', value: 'nl' },
					{ name: 'English', value: 'en' },
					{ name: 'French', value: 'fr' },
					{ name: 'German', value: 'de' },
					{ name: 'Greek', value: 'el' },
					{ name: 'Italian', value: 'it' },
					{ name: 'Norwegian Bokmal', value: 'nb' },
					{ name: 'Polish', value: 'pl' },
					{ name: 'Portuguese', value: 'pt' },
					{ name: 'Romanian', value: 'ro' },
					{ name: 'Russian', value: 'ru' },
					{ name: 'Spanish', value: 'es' },
					{ name: 'Swedish', value: 'sv' },
				],
				default: 'en',
				routing: {
					send: {
						type: 'body',
						property: 'language',
					},
				},
			},
		],
	},
	settingsField,
];

export { recipientsField, settingsField, documentSourceField, templateIdField, documentIdField, binaryPropertyField };
