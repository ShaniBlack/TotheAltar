const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')

const generateMarkdown = require('./generateMarkdown')

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'developer'
  },
  {
    type: 'input',
    message: 'What is your Github user name?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message:
      'Describe what your application does, what were some of the challenges you faced, and what are some features you hope to implement in the future.',
    name: 'description'
  },
  // {
  //     type: 'input',
  //     message: 'Add path or link to images/videos here',
  //     name: 'images'
  // },
  {
    type: 'input',
    message: 'What is the name of your 1st collaborator?',
    name: 'contributing1'
  },
  {
    type: 'input',
    message: 'What is their GitHub username?',
    name: 'contrib1'
  },
  {
    type: 'input',
    message: 'What is the name of your 2nd collaborator?',
    name: 'contributing2'
  },
  {
    type: 'input',
    message: 'What is their GitHub username?',
    name: 'contrib2'
  },
  {
    type: 'checkbox',
    message: 'What technologies or applications were used?',
    choices: [
      'HTML',
      'JavaScript',
      'CSS',
      'node.js',
      'jQuery',
      'inquirer',
      'path',
      'Screencastify',
      'json',
      'MySQL',
      'MongoDB',
      'Express',
      'Bootstrap',
      'Bulma'
    ],
    name: 'technologies'
  },
  {
    type: 'input',
    message: 'Describe the installation process.',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What is this project usage for?',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'Choose the appropriate license for this project',
    choices: [
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'Boost Software License 1.0',
      'The Unlicense'
    ],
    name: 'license'
  },
  {
    type: 'input',
    message: 'Is there a test included?',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'What is the GitHub link for the application?',
    name: 'gitlink'
  },
  {
    type: 'input',
    message: 'What is the link for the deployed application',
    name: 'deployedlink'
  }
]

// function to write README file
function writeToFile(template, responses) {
  // path.join joins together the cwd and filename we pass in
  return fs.writeFileSync(path.join(process.cwd(), template), responses)
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(function(response) {
      writeToFile('README.md', generateMarkdown(response))
    })
    .catch((err) => console.error(err))
}

// function call to initialize program
init()
