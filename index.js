// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');


const licensesObj = ['APACHE','BSD','GPL', 'MIT', 'None' ]

// TODO: Create an array of questions for user input
const questions = [
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of project',
        name: 'projectname',
      },
      {
        type: 'input',
        message: 'What is a description of the project?',
        name: 'projectdescription',
      },
      {
        type: 'input',
        message: 'What are the insallation instructions?',
        name: 'installinstructions',
      },
      {
        type: 'input',
        message: 'What is your projects inteded use?',
        name: 'intendeduse',
      },
      {
        type: 'input',
        message: 'What are your projects collaborators or 3rd party assets?',
        name: 'collaborators',
      },
      {
        type: 'list',
        message: 'What is your project license?',
        choices: licensesObj,
        name: 'license'
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitusername',
      },
      {
        type: 'input',
        message: 'What is your contact email?',
        name: 'emailcontact',
      },    
    ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readme = "./readmefolder/readme.md";

  fs.writeFile("output.txt", "Hello World!", function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("File created successfully!");
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.promt(questions)
  .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
