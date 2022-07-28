module.exports = {
  extends: [
    "plugin:@trevorblades/react",
    "plugin:@trevorblades/typescript",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.mdx"],
      globals: {
        MyComponent: true,
      },
    },
  ],
};
