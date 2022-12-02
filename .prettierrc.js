const prettierConfigStandard = require('prettier-config-standard');

const modifiedConfig = Object.assign({}, prettierConfigStandard, {
  semi: true,
  trailingComma: 'es5',
  // ... other modified settings here
});

module.exports = modifiedConfig;
