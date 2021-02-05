const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
    }
  ]);
};

const promptProject = portfolioData => {
    // If there is no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
        =================
        Add a New Project
        =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build the project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter a GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        },
    ])
    .then(projectData => {
        // push data into the array
        portfolioData.projects.push(projectData);
        // check if they want to add another project
        if (projectData.confirmAddProject) {
            // if so, call the function again passing the array back through the function
            return promptProject(portfolioData);
        } else {
            // return the array
            return portfolioData;
        }
    });
}

promptUser()
    .then(promptProject)
    .then(portfolioData => console.log(portfolioData));