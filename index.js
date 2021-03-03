const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Team managers Name'
    },

    {
        type: 'input',
        name: 'name',
        message: 'Enter Team managers Name'
    },


];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        writeToFile("README.md", generateMarkdown({...responses}))
    })
}

// function call to initialize program
init();
