#!/usr/bin/env node

/* eslint-disable no-console */
const path = require("path");
const cpy = require("cpy");
const del = require("del");
const fsExtra = require("fs-extra");
const fs = require("fs").promises;
const util = require("util");
const { overrides } = require("../src/.eslintrc.typescript");
const exec = util.promisify(require("child_process").exec);

const basePath = path.resolve(path.join(process.cwd()));
const distPath = path.resolve(basePath, "dist");

const prepareFolder = async () => {
  console.log("🛠️ Preparing folder");

  if (!fsExtra.existsSync(distPath)) {
    fsExtra.mkdirSync(distPath);
  } else {
    await del([distPath + "/*"]);
  }

  console.log("👍 Prepared folder");
};

const preparePackage = () => {
  console.log("🛠️ Preparing package package.json");

  /* eslint-disable-next-line global-require */
  const packageJson = require(path.join(basePath, "package.json"));

  const publishPackageJson = { ...packageJson };
  publishPackageJson.main = "index.js";
  delete publishPackageJson.devDependencies;
  delete publishPackageJson.scripts;
  delete publishPackageJson.eslintIgnore;

  fsExtra.writeFileSync(path.resolve(distPath, "package.json"), JSON.stringify(publishPackageJson, null, 2));

  console.log("👍 Prepared package package.json");
};

const prepareFiles = async () => {
  console.log("🛠️ Preparing package files");

  (async () => {
    await cpy(["./src/.prettierrc.js", "../README.md"], distPath, { parents: false });
  })();

  console.log("👍 Prepare package files");
};

const obtainRulesFromEslintrc = async (inputConfig) => {
  const { error, stdout, stderr } = await exec(`eslint -c ${inputConfig} --print-config package.json`);
  const eslintBase = require(`../${inputConfig}`);
  if (error) {
    console.log(`error: ${error.message}`);
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
  }
  const rules = await JSON.parse(stdout);
  rules["settings"] = eslintBase.settings;
  rules["overrides"] = eslintBase.overrides;
  return rules;
};

const saveRulesToFile = async (distFile, inputConfig) => {
  const allConfig = await obtainRulesFromEslintrc(inputConfig);
  const desiredConfig = {
    env: allConfig.env,
    plugins: allConfig.plugins,
    rules: allConfig.rules,
    settings: allConfig.settings,
    overrides: allConfig.overrides,
  };

  const fileContent = "module.exports = " + JSON.stringify(desiredConfig, null, 2);
  const comment = `// this file was auto-generated from the project's ${inputConfig} via ./scripts/package.js`;
  await fs.writeFile(distFile, comment + "\n");
  console.log("Created file " + distFile);

  await fs.appendFile(distFile, fileContent);
  console.log("Saved eslint config to: " + distFile);
};

(async () => {
  await prepareFolder();
  saveRulesToFile(distPath + "/react.js", "./src/.eslintrc.react.js");
  saveRulesToFile(distPath + "/react-ts.js", "./src/.eslintrc.react-ts.js");
  saveRulesToFile(distPath + "/index.js", "./src/.eslintrc.default.js");
  saveRulesToFile(distPath + "/typescript.js", "./src/.eslintrc.typescript.js");
  saveRulesToFile(distPath + "/imports.js", "./src/.eslintrc.imports.js");
  preparePackage();
  await prepareFiles();
})();
