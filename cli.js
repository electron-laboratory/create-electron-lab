#!/usr/bin/env node

const inquirer = require('inquirer');
const downloadTemplate = require('./download.js');
const question = require ('./question/index.js');
const yParser = require('yargs-parser');
const semver = require('semver');
const chalk = require('chalk');
const { join } = require('path');
const { existsSync } = require('fs');

// print version and @local
const args = yParser(process.argv.slice(2));

if (args.v || args.version) {
  console.log(require('./package').version);
  if (existsSync(join(__dirname, '.local'))) {
    console.log(chalk.cyan('@local'));
  }
  process.exit(0);
}

if (!semver.satisfies(process.version, '>= 8.0.0')) {
  console.error(chalk.red('✘ The generator will only work with Node v8.0.0 and up!'));
  process.exit(1);
}

inquirer.prompt(question).then((answers) => {
  downloadTemplate(answers.framework, answers.version, answers.name);
});
