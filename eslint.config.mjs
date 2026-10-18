import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Marketing copy includes typographic apostrophes and contractions in JSX text.
  { rules: { "react/no-unescaped-entities": "off" } },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);

export default eslintConfig;
