import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Add',
	value: 'add',
	description: 'Add a new domain',
	action: 'Add a domain',
	routing: {
		request: {
			method: 'POST',
			url: '={{$parameter.scope === "company" ? "/company/domains" : "/workspace/" + $parameter.workspaceId + "/domains"}}',
		},
	},
};

export const fields: INodeProperties[] = [
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'options',
		required: true,
		options: [
			{ name: 'Company', value: 'company' },
			{ name: 'Workspace', value: 'workspace' },
		],
		default: 'company',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['add'],
			},
		},
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['add'],
				scope: ['workspace'],
			},
		},
	},
	{
		displayName: 'Domain Name',
		name: 'domainName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['add'],
			},
		},
		description: 'The domain name to add (e.g. example.com)',
		routing: {
			send: {
				type: 'body',
				property: 'domain',
			},
		},
	},
];
