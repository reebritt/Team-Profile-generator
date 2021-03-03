const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Manager's Name"
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee id'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter you email address'
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number'
        }
        

    ]).then(answers =>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager)
        createTeam()
    })
}
    createManager()

    function addEngineer(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter you name'
            },
         
            {
                type: 'input',
                name: 'id',
                message: 'Enter your id'
             },

             {
                 type: 'input',
                 name: 'email',
                 message: 'Enter your email id'
             },

             {
                 type: 'input',
                 name: 'github',
                 message: 'Enter your github id'
             }


        ]).then(answers =>{
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            console.log(engineer);
            createTeam()
        })

    }

    function addIntern(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your id'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email id'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter your school name'
            }

        ]).then(answers =>{
            const intern = new Intern(answers.name, answers.id, ansers.email, answers.school)
            console.log(intern);
            createTeam()
        })

    }

    function createTeam(){
        inquirer.prompt([
            {
                type: 'list',
                name:'teamMemberChoice',
                message: 'What type of team member would you like to add?',
                choices: ['Intern', 'Engineer', 'Finished']
            }
        ]).then(answers =>{
            switch(answers.teamMemberChoice){
                case "Intern": 
                addIntern();
                break
                case "Engineer":
                addEngineer();
                default:
                buildTeam();       
            }
        })
    }


// ];

//
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// // function to initialize program update 
// function init() {
//     inquirer.prompt(questions).then(responses => {
//         console.log(responses);
//         writeToFile("README.md", generateMarkdown({ ...responses }))
//     })
// }

// // function call to initialize program
// init();
