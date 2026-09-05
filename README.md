# stylelint-config

This package provides Lomray base stylelint config as an extensible shared config.

Requires Node.js 20.19.0 or newer and Stylelint 17. Prettier 3 and PostCSS 8
are peer dependencies of the included plugins and SCSS config.

## Usage

1. Install the package and its peers:

```sh
npm i --save-dev @lomray/stylelint-config stylelint@^17.0.0 prettier@^3.0.0 postcss@^8.3.3
```

2. Add a `stylelint.config.js` in a project with `"type": "module"` in
   `package.json` (or use `stylelint.config.mjs`):

```js
export default {
  extends: ['@lomray/stylelint-config'],
};
```
