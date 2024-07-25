// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import eslintTest from "@republicservices/eslint-config-rscom"


// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...eslintTest
// ];

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintTest from "@republicservices/eslint-config-rscom"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintTest,
);

