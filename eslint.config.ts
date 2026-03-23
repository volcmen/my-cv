/* eslint-disable import-x/no-named-as-default-member -- 💫 Allow named imports from default exports */

import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';
import { Linter } from 'eslint';
import preactConfigPlugin from 'eslint-config-preact';

const stylisticConfig = stylistic.configs.customize({
  semi: true,
});

const preactConfig: Linter.Config[] = [
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],

    plugins: {
      'import-x': importX,
      '@stylistic': stylistic,
    },

    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs', 'eslint.config.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    settings: {
      'import-x/extensions': [
        '.ts', '.tsx',
        '.cts', '.mts',
        '.js', '.jsx',
        '.cjs', '.mjs',
      ],
      'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import-x/parsers': {
        '@typescript-eslint/parser': [
          '.ts',
          '.tsx',
          '.cts',
          '.mts',
          '.js',
          '.jsx',
          '.cjs',
          '.mjs'],
      },
      'import-x/resolver': { typescript: true },
    },

    rules: {
      ...importX.flatConfigs.recommended.rules,
      ...importX.flatConfigs.typescript.rules,

      ...stylisticConfig.rules,
    },
  },
];

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  tsEslint.configs.eslintRecommended,
  tsEslint.configs.strict,
  tsEslint.configs.stylistic,

  ...preactConfigPlugin,
  ...preactConfig,

  {
    files: ['scripts/**/*.ts'],
    languageOptions: {
      globals: {
        Bun: 'readonly',
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tsEslint.configs.disableTypeChecked],
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    'dist/**',
    'out/**',
    'build/**',
    'components/ui/**',
  ]),
]);

export default eslintConfig;
