#!/usr/bin/env node

const inquirer = require('inquirer');
const downloadTemplate = require('./download.js');
const question = require ('./question/index.js');

inquirer.prompt(question).then((answers) => {
  downloadTemplate(answers.framework, answers.version, answers.name);
});
