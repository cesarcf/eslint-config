#!/usr/bin/env node
const path = require("path");
/* eslint-disable no-console */
const util = require("util");
const exec = util.promisify(require("child_process").exec);

(async () => {
  /* eslint-disable-next-line global-require */
  const basePath = path.resolve(path.join(process.cwd()));
  const packageJson = require(path.join(basePath, "package.json"));

  console.log(`🛠️ Publishing @cesarcf/eslint-config release ${packageJson.version} ...`);

  await exec(`npm publish ./dist --verbose --access public`);
  console.log(`🛠️ @cesarcf/eslint-config have published a new version (${packageJson.version})!`);
})();
