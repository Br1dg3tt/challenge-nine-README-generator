const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Name the project.",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of the project.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Include a screenshot of the project.",
    },
    {
        type: "input",
        name: "link",
        message: "Provide a link for the deployed project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a License used for the project.",
        choices: ["ApacheLicense2.0","GNUGeneralPublicLicensev3.0","MITLicense", "BSD2-ClauseLicense"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies.",
    },
    {
        type: "input",
        name: "usage",
        message: "List any languages or technologies associated with the project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Provide GitHub username.",
    },
    {
        type: "input",
        name: "name",
        message: "Provide full name.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide email.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List any contributors.",
    },
    {
        type: "input",
        name: "test",
        message: "Include a walkthrough of the test.",
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Create a README.md File.");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}
init();