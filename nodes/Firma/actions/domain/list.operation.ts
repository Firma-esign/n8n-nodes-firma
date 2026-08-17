import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'List',
	value: 'list',
	description: 'List all domains',
	action: 'List domains',
	routing: {
		request: {
			method: 'GET',
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
				operation: ['list'],
			},
		},
		description: 'Whether to list company-scoped or workspace-scoped domains',
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
				operation: ['list'],
				scope: ['workspace'],
			},
		},
	},
];
