const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require('./lib/Employee');

const dist_dir = path.resolve(__dirname, "dist")
const dist_path = path.join(dist_dir, "team.html")
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


    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager)
        createTeam()
    })
}
createManager()

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Engineer name'
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter Engineer id'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter Engineer email id'
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter Engineer github id'
        }


    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(engineer);
        createTeam()
    })

}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your Intern name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your Intern id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Intern email id'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name'
        }

    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        console.log(intern);
        createTeam()
    })

}

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberChoice',
            message: 'What type of team member would you like to add?',
            choices: ['Intern', 'Engineer', 'Finished']
        }
    ]).then(answers => {
        switch (answers.teamMemberChoice) {
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

//write a function to build all employees and then use push method array.push 
//create a function to put the input into the html 


function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <nav class="navbar mb-5 text-white" style="background-color: palevioletred; height: 10rem;">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row"> </div>
        </div>
      
    <div class="col-4">
        <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header bg-primary text-white"><br /><br /> </h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item"><a href=""></a></li>
                <li class="list-group-item"></li>
            </ul>
        </div>
    </div>
    
    </body>
    
    </html>`

}
//function to move in the team members
//return fs.writeFileSync(__dirname, "./team.html", function (err, data))

