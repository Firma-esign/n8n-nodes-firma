import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Set Primary',
	value: 'setPrimary',
	description: 'Set a domain as the primary domain',
	action: 'Set primary domain',
	routing: {
		request: {
			method: 'POST',
			url: '={{$parameter.scope === "company" ? "/company/domains/" + $parameter.domainId + "/set-primary" : "/workspace/" + $parameter.workspaceId + "/domains/" + $parameter.domainId + "/set-primary"}}',
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
		displayOptions: { show: { resource: ['domain'], operation: ['setPrimary'] } },
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['setPrimary'], scope: ['workspace'] } },
	},
	{
		displayName: 'Domain ID',
		name: 'domainId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['setPrimary'] } },
	},
];
