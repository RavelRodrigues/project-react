import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  // Aplica as configurações recomendadas do ESLint
  js.configs.recommended,

  // Aplica as configurações do React
  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'off',
      'quotes': ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      'semi': ['error', 'always'],
      'no-unused-vars': ['warn'],
      'indent': ['error', 2],
      'react/jsx-indent': ['error', 2],
    },
  },
];
