// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const  generateMarkdown  = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
        {
        
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like for your project?',
            choices: ['Apache', 'GNU', 'MIT','No License'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Who has contributed to your project?',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How do you perform tests on your project?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username?',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README created.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const generatedMarkdown = generateMarkdown(answers)
        writeToFile('./output/README.md', generatedMarkdown)
})
}

// Function call to initialize app
init();
