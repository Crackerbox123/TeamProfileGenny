const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Employee = require('./lib/Employee');
const generateSite = require('./src/generate-site.js');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInpute => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email',
            validate: getEmail => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ]).then(answer => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId. answers.email. answers.officeNumber);
        teamMembers.push(manager);
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select option to add:', 
            choice: ['add an engineer', 'add an intern', 'finish building my team']

        } ])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();                    
            }
        });
};

const promptEngineer = () => {
    console.log('
    ==============
    Add engineer 
    ==============')
}