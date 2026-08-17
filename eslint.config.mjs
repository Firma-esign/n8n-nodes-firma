import n8nPlugin from '@n8n/eslint-plugin-community-nodes';
import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		...n8nPlugin.configs.recommended,
		files: ['nodes/**/*.ts', 'credentials/**/*.ts'],
	},
	{
		files: ['package.json'],
		...n8nPlugin.configs.recommended,
	},
	{
		ignores: ['dist/**', 'node_modules/**'],
	},
];
