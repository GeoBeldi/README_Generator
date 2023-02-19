// We include the packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "projectName",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please include a short description of your project",
  },
  {
    type: "input",
    name: "about",
    message: "What does that user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  if (err) {
    console.log(err);
  } else console.log("The information has been saved successfully");
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    let dataArray = data;
    console.log(dataArray);
  });
}

// function call to initialize program
init();
