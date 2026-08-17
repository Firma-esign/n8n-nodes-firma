import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Rotate Secret (Company)',
	value: 'rotateSecretCompany',
	description: 'Rotate the company-level webhook signing secret (1-hour cooldown)',
	action: 'Rotate company webhook secret',
	routing: {
		request: {
			method: 'POST',
			url: '/webhooks/rotate-secret',
		},
	},
};

export const fields: INodeProperties[] = [];
