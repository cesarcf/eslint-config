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

```json
{
  "extends": "@cesarcf"
}
```

If you need to override a rule, your `.eslintrc.js` file should look like the example below. All shared rules will be used, but `eqeqeq` will be turned off.

```json
{
  "extends": "@cesarcf",
  "rules": {
    "eqeqeq": "off"
  }
}
```

## License

Copyright (c) 2020 Cesar Carbajo. Licensed under the MIT license.