import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Verify DNS',
	value: 'verifyDns',
	description: 'Verify DNS records for a domain',
	action: 'Verify domain DNS',
	routing: {
		request: {
			method: 'POST',
			url: '={{$parameter.scope === "company" ? "/company/domains/" + $parameter.domainId + "/verify-dns" : "/workspace/" + $parameter.workspaceId + "/domains/" + $parameter.domainId + "/verify-dns"}}',
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
		displayOptions: { show: { resource: ['domain'], operation: ['verifyDns'] } },
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['verifyDns'], scope: ['workspace'] } },
	},
	{
		displayName: 'Domain ID',
		name: 'domainId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['verifyDns'] } },
	},
];
