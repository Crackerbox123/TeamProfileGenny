const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/page-template.js');
const fs = require('fs');

const employees = [];



const questions = 
        [{
            type: 'input', 
            name: 'name',
            message: 'Team Managers Name?'
        },
        {
            type: 'input', 
            name: 'id',
            message: 'What is your ID number?'
        },
        {
            type: 'input', 
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input', 
            name: 'number',
            message: 'What is your Office Number?'
        },
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Done."], 
            name: 'addmember',
            message: 'Do you want to add a member?'
        }];



function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'engName',
            message: `Please type in Engineer's name`
        },
        {
            type: 'input', 
            name: 'engId',
            message: `What is Engineer's ID?`
        },
        {
            type: 'input', 
            name: 'engEmail',
            message: `What is Engineer's email?`
        },
        {
            type: 'input', 
            name: 'gitHub',
            message: `What is Engineer's Git-Hub ID?`
        },
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Done."], 
            name: 'addmembers1',
            message: 'Do you want to add another member?'
        },
    ]).then((answer) => {

        const engineer = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.gitHub);
        employees.push(engineer)//push it to array employees

        if(answer.addmembers1 === 'Engineer') {
            engineerQuestions()
        } else if(answer.addmembers1 === 'Intern') {
            internQuestions()
        } else {
            writeToFile("index.html", generateHTML(employees) )
        }

    });
};



function internQuestions() {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'inName',
            message: 'Please type in your name'
        },
        {
            type: 'input', 
            name: 'inId',
            message: 'What is your ID?'
        },
        {
            type: 'input', 
            name: 'inEmail',
            message: 'What is your email?'
        },
        {
            type: 'input', 
            name: 'school',
            message: 'Where did you go to school?'
        },
        {
            type: 'list',
            choices: ["Engineer", "Intern", "Done."], 
            name: 'addmembers2',
            message: 'Do you want to add another member?'
        },
       
    ]).then((answer) => {
        const intern = new Intern(answer.inName, answer.inId, answer.inEmail, answer.school);
        employees.push(intern)//push it to array employees

        if(answer.addmembers2 === 'Engineer') {
            engineerQuestions()
        } else if(answer.addmembers2 === 'Intern') {
            internQuestions()
        } else {
            writeToFile("index.html", generateHTML(employees) )
        }
    });
}


function writeToFile(fileName, data) {
    fs.writeFile('./' + fileName, data, err => {
        if(err) {
            return console.error(err) 
        } else {
            console.log("Successfully wrote to: " + fileName);
        }
    })    
}



function init() {
    inquirer.prompt(questions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        employees.push(manager); //push it to array employees
       
        switch(answers.addmember) {

            case "Engineer":
                engineerQuestions();
            break;

            case "Intern":             
                internQuestions()     
            break;

            default:
                writeToFile("index.html", generateHTML(employees) )

        }

    })
    };



init();
