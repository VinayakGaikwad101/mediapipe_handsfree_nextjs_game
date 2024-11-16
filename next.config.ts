module.exports = {
  eslint: {
    // ... other ESLint configurations
    ignoreDuringBuilds: true,
  },
  eslintConfig: {
    ignorePatterns: ["**/*"], // Ignore all files and directories
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
};
