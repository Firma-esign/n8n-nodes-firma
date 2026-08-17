import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const description: INodePropertyOptions = {
	name: 'Finalize',
	value: 'finalize',
	description: 'Finalize domain setup after verification',
	action: 'Finalize a domain',
	routing: {
		request: {
			method: 'POST',
			url: '={{$parameter.scope === "company" ? "/company/domains/" + $parameter.domainId + "/finalize" : "/workspace/" + $parameter.workspaceId + "/domains/" + $parameter.domainId + "/finalize"}}',
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
		displayOptions: { show: { resource: ['domain'], operation: ['finalize'] } },
	},
	{
		displayName: 'Workspace ID',
		name: 'workspaceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['finalize'], scope: ['workspace'] } },
	},
	{
		displayName: 'Domain ID',
		name: 'domainId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['domain'], operation: ['finalize'] } },
	},
];
