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
      '@angular-eslint/component-max-inline-declarations': [
        'error',
        { template: 12 },
      ],
      '@angular-eslint/consistent-component-styles': ['error', 'string'],
      '@angular-eslint/no-async-lifecycle-method': 'error',
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/no-pipe-impure': 'error',
      '@angular-eslint/pipe-prefix': [
        'error',
        {
          prefixes: ['dg'],
        },
      ],
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/prefer-signals': 'error',
      '@angular-eslint/relative-url-prefix': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@angular-eslint/use-component-selector': 'error',
      '@angular-eslint/use-component-view-encapsulation': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      // Rules: https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/README.md
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
      '@angular-eslint/template/button-has-type': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/no-positive-tabindex': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-ngsrc': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/prefer-static-string-properties': 'error',
      // Rules: https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template
    },
    ignores: ['src/libs/ui/**/*.html'],
  },
  // @ts-ignore
  eslintConfigPrettier
);
