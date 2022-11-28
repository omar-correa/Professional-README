// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
// const questions = []
inquirer.prompt([
    {
        name: "projectTitle",
        message: "What is the title of your project",
        type: "input"
    },
    {
        name: "description",
        message: "Describe your project",
        type: "input"
    },
    // {
    //     name: "tableOfContents",
    //     message: "Include a table of contents",
    //     type: "Input"
    // },
    {
        name: "installation",
        message: "How do users install the project?",
        type: "input"
    },
    {
        name: "usage",
        message: "For what will this project be used?",
        type: "input"
    },
    {
        name: "license",
        message: "Which license is needed?",
        type: "list",
        choices: ['MIT License','Apache License 2.0','Boost Software License 1.0', 'Eclipse Public License 2.0','Mozilla Public License 2.0']
    },
    {
        name: "contributing",
        message: "How do future developers go about contributing to the project?",
        type: "input"
    },
    {
        name: "tests",
        message: "What tests need to be run?",
        type: "input"
    },
    {
        name: "github",
        message: "What is your GitHub username?",
        type: "input"
    },
    {
        name: "email",
        message: "what is your email?",
        type: "input"
    }

]).then(response => {
    const html = `
    # ${response.projectTitle}

    ## Table of Contents
    * [Description](#description)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Description
    ${response.description}
    ## Installation
    ${response.installation}
    ## Usage
    ${response.usage}
    ## License
    ${response.license}
    ## Contributing
    ${response.contributing}
    ## Tests
    ${response.tests}
    ## Questions
    GitHub: ${response.github} [GitHub](https://github.com/omar-correa)
    The best way to reach me for any questions, comments, or concerns is via my email: ${response.email}.`

    fs.writeFile("README.md", html, error => {
        if (error) {
            console.log("error")
        } else {
            console.log("README successfully created")
        }
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
