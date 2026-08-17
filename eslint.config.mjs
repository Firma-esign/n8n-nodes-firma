import n8nPlugin from '@n8n/eslint-plugin-community-nodes';
import n8nNodesBase from 'eslint-plugin-n8n-nodes-base';
import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		...n8nPlugin.configs.recommended,
		files: ['nodes/**/*.ts', 'credentials/**/*.ts'],
	},
	{
		files: ['nodes/**/*.ts'],
		plugins: { 'n8n-nodes-base': n8nNodesBase },
		rules: {
			...n8nNodesBase.configs.nodes.rules,
			// Conflict with @n8n/eslint-plugin-community-nodes, which requires
			// NodeConnectionTypes.Main instead of 'main' string literals.
			'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'off',
			'n8n-nodes-base/node-class-description-outputs-wrong': 'off',
		},
	},
	{
		files: ['credentials/**/*.ts'],
		plugins: { 'n8n-nodes-base': n8nNodesBase },
		rules: {
			...n8nNodesBase.configs.credentials.rules,
			// Community credentials use a full docs URL, not an n8n-docs slug.
			'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off',
			'n8n-nodes-base/cred-class-field-documentation-url-not-http-url': 'off',
		},
	},
	{
		files: ['package.json'],
		...n8nPlugin.configs.recommended,
	},
	{
		ignores: ['dist/**', 'node_modules/**'],
	},
];
