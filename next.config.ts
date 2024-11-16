module.exports = {
  eslint: {
    // ... other ESLint configurations
    ignoreDuringBuilds: true,
  },
  eslintConfig: {
    ignorePatterns: ["**/*.tsx"], // Ignore all .tsx files
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
};
