# eslint-config

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for JavaScript projects

## What is eslint-config?

Shared configuration for ESLint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file.

## How do I install it?

```bash
npm install --save-dev @cesarcf/eslint-config
```

## Usage

Add the following to your `.eslintrc.js` file:

```js
module.exports = {
  extends: '@cesarcf'
}
```
Add the following to your `prettier.config.js` file:

```js
module.exports = require('@cesarcf/eslint-config/prettier.config')
```

If you need to override a rule, your `.eslintrc.js` file should look like the example below.
```js
module.exports = {
  extends: '@cesarcf',
  root: true,
  settings: {
    react: {
      version: 'detect'
    },
    /** eslint-import-resolver-alias */
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components/'],
          ['assets', './src/assets/'],
          ['utils', './src/utils/'],
          ['test', './src/test/']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  }
}
```

## License

Copyright (c) 2020 Cesar Carbajo. Licensed under the MIT license.