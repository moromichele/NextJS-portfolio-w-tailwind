import js from "@eslint/js"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import { FlatCompat } from "@eslint/eslintrc"
import { defineConfig } from "eslint/config"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

export default defineConfig([
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: [
			".next/**",
			".env",
			"node_modules",
			"public/**",
			"next.config.js",
			"postcss.config.js",
		],
	},
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	{
		files: ["**/*.{js,mjs,cjs,jsx}"],
		plugins: { js, "unused-imports": unusedImports },
		extends: ["js/recommended"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts}"],
		languageOptions: { globals: globals.browser },
	},
	{
		rules: {
			"no-unused-vars": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
			"no-undef": ["warn"],
			quotes: ["warn", "double", { avoidEscape: true }],
			indent: ["warn", "tab"],
			"class-methods-use-this": "warn",
			"no-unused-expressions": ["warn"],
			"no-multiple-empty-lines": ["error", { max: 1 }],
			"no-trailing-spaces": ["warn"],
			"no-useless-constructor": 0,
			"no-loop-func": 0,
		},
	},
	js.configs.recommended,
])
