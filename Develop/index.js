// packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

// questions that will be logged on the console for user to answer
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
// if else statements that generate the appropriate license badge
    let badge = ""
    if(response.license === 'MIT License'){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if(response.license === 'Apache License 2.0'){
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (response.license === 'Boost Software License 1.0'){
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    // text that will be generate in the readme
    const file = ` 
# ${response.projectTitle}

## License
${badge}
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
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
If you have any questions, comments, or concerns, you may contact me via [GitHub](https://github.com/${response.github}) or 
by email: ${response.email}.`

    fs.writeFile("README.md", file, error => {
        if (error) {
            console.log("error")
        } else {
            console.log("README successfully created")
        }
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
