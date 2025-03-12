// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended, // https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/ts-recommended.ts
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'dg',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'dg',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/prefer-signals': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      // See more rules: https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/README.md
    },
    ignores: ['src/libs/ui/**/*.ts', 'src/libs/ui/**/*.d.ts'],
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended, // https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/template-recommended.ts
      ...angular.configs.templateAccessibility, // https://github.com/angular-eslint/angular-eslint/blob/main/packages/angular-eslint/src/configs/template-accessibility.ts
    ],
    rules: {
      // See more rules: https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template
    },
    ignores: ['src/libs/ui/**/*.html'],
  },
  // @ts-ignore
  eslintConfigPrettier
);
