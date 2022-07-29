module.exports = {
  extends: ["plugin:mdx/recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.mdx"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
