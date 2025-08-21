// inventory/eslint.config.js
import { defineConfig } from "eslint-define-config";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{ts,mts}"],
    languageOptions: {
      parser: tsParser, // Import the parser object, not a string
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: "module",
        project: "./tsconfig.json", // Add this for TypeScript-aware rules
      },
      globals: {
        // Node.js globals
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        global: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Base JavaScript rules (turn off in favor of TypeScript equivalents)
      "no-unused-vars": "off", // Use @typescript-eslint/no-unused-vars instead
      "no-undef": "off", // TypeScript handles this
      
      // General rules
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  // Prettier overrides to avoid conflicts (should be last)
  prettier,
]);