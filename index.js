// Assign variables to dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");



// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "info",
        message: "Enter a description for your project."
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "installation",
        message: "What command will install the dependencies?",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "How will the user use the application?"
    },
    {
        type: "input",
        name: "credits",
        message: "What technologies or outside sources should you credit?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How can the user contribute to the repo?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

// function call to initialize program
init();
