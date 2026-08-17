import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Delete',
	value: 'delete',
	description: 'Delete a domain',
	action: 'Delete a domain',
	routing: {
		request: {
			method: 'DELETE',
			url: '={{$parameter.scope === "company" ? "/company/domains/" + $parameter.domainId : "/workspace/" + $parameter.workspaceId + "/domains/" + $parameter.domainId}}',
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
		displayOptions: { show: { resource: ['domain'], operation: ['delete'] } },
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['delete'], scope: ['workspace'] } },
	},
	{
		displayName: 'Domain ID',
		name: 'domainId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['delete'] } },
	},
];
