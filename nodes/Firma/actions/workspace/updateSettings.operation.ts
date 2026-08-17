import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Update Settings',
	value: 'updateSettings',
	description: 'Update workspace settings (PATCH semantics despite PUT verb)',
	action: 'Update workspace settings',
	routing: {
		request: {
			method: 'PUT',
			url: '=/workspace/{{$parameter.workspaceId}}/settings',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['updateSettings'],
			},
		},
	},
	{
		displayName: 'Settings',
		name: 'settings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['updateSettings'],
			},
		},
		options: [
			{
				displayName: 'Signing Request Email Header',
				name: 'signingRequestEmailHeader',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'signing_request_email_header',
					},
				},
			},
			{
				displayName: 'Signing Request Email Body',
				name: 'signingRequestEmailBody',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'signing_request_email_body',
					},
				},
			},
			{
				displayName: 'Team Email',
				name: 'teamEmail',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'team_email',
					},
				},
			},
			{
				displayName: 'Timezone',
				name: 'timezone',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'timezone',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'language',
					},
				},
			},
			{
				displayName: 'Show Credit Cost in Editor',
				name: 'showCreditCostInEditor',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'show_credit_cost_in_editor',
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
						property: 'require_otp_verification',
					},
				},
			},
			{
				displayName: 'Require Terms Acceptance',
				name: 'requireTermsAcceptance',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'require_terms_acceptance',
					},
				},
			},
			{
				displayName: 'Allow Pre-Signing Download',
				name: 'allowPresigningDownload',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'allow_presigning_download',
					},
				},
			},
			{
				displayName: 'Disable Guided Navigation',
				name: 'disableGuidedNavigation',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'disable_guided_navigation',
					},
				},
			},
			{
				displayName: 'Show QR Code',
				name: 'showQrCode',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'show_qr_code',
					},
				},
			},
			{
				displayName: 'Show Signature Frame',
				name: 'showSignatureFrame',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'show_signature_frame',
					},
				},
			},
			{
				displayName: 'Show Partial Watermark',
				name: 'showPartialWatermark',
				type: 'boolean',
				default: false,
				routing: {
					send: {
						type: 'body',
						property: 'show_partial_watermark',
					},
				},
			},
		],
	},
];
