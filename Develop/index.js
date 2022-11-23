// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
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
        name: "tableOfContents",
        message: "Include a table of contents",
        type: "Input"
    },
    {
        name: "installation",
        message: "",
        type: "Input"
    },
    {
        name: "usage",
        message: "",
        type: "Input"
    },
    {
        name: "license",
        message: "",
        type: "List"
    },
    {
        name: "contributing",
        message: "",
        type: "Input"
    },
    {
        name: "tests",
        message: "",
        type: "Input"
    },
    {
        name: "questions",
        message: "",
        type: "Input"
    }

]).then(response => {
    const html = `<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio</title>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <main>
          <h1>Portfolio</h1> 
          <div><h3>${response.projectTitle}</h3></div>
          <div><h3>${response.description}</h3></div>
          <div><h3>${response.tableOfContents}</h3></div>
          <div><h3>${response.installation}</h3></div>
          <div><h3>${response.usage}</h3></div>
          <div><h3>${response.license}</h3></div>
          <div><h3>${response.contributing}</h3></div>
          <div><h3>${response.tests}</h3></div>
          <div><h3>${response.questions}</h3></div>
        </main>
        <script src="index.js"></script>
    </body>
    </html>`
    fs.writeFile("index.html", html, error => {
        if (error) {
            console.log("error")
        } else {
            console.log("Response saved")
        }
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
