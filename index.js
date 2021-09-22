import inquirer from 'inquirer';
import downloadTemplate from './download.js';
import question from './question/index.js';

inquirer
    .prompt(question)
    .then(answers => {
        downloadTemplate(
            answers.framework,
            answers.version,
            answers.name
        )    
    })