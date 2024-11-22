import { eslintPresets } from '@eqian/eslint-config-preset';
// import js from '@eslint/js'
// import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react';
// export default [
//     {
//         ...pluginReact.configs.recommended
//     },
//     ...tseslint.config(
//   { ignores: ['dist', 'eslint.config.js'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )]
export default eslintPresets(
  [
    {
      name: 'react-plugin',
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        react: pluginReact
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        // 版本高于17，需要禁用
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
      }
    }
  ],
  {
    vue: false
  }
);
