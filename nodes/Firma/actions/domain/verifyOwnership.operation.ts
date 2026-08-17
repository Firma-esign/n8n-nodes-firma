import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Verify Ownership',
	value: 'verifyOwnership',
	description: 'Verify ownership of a domain',
	action: 'Verify domain ownership',
	routing: {
		request: {
			method: 'POST',
			url: '={{$parameter.scope === "company" ? "/company/domains/" + $parameter.domainId + "/verify-ownership" : "/workspace/" + $parameter.workspaceId + "/domains/" + $parameter.domainId + "/verify-ownership"}}',
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
		displayOptions: { show: { resource: ['domain'], operation: ['verifyOwnership'] } },
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['verifyOwnership'], scope: ['workspace'] } },
	},
	{
		displayName: 'Domain ID',
		name: 'domainId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['verifyOwnership'] } },
	},
];
