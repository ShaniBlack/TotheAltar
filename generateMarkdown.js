// function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}
## Description
${responses.description}


Here are some of the technologies that were used to the create this program:
${responses.technologies}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Live_Links](#live_links)
* [Questions](#questions)
* [License](#license)
    
## Installation
${responses.installation}

## Usage
${responses.usage}

## Contributing
${responses.developer} [GitHub](https://github.com/${responses.username})

${responses.contributing1} [GitHub](https://github.com/${responses.contrib1})

${responses.contributing2} [GitHub](https://github.com/${responses.contrib2})

## Tests
${responses.tests}

## Live_Links
GitHub [link](${responses.gitlink})

Deployed site [link](${responses.deployedlink})

## Questions
Please feel free to find me on GitHub: [${responses.username}](https://github.com/${responses.username})
You can also [email](${responses.email}) me with any questions.
    
## License
This application is covered by the ${responses.license} license.
  `
}

module.exports = generateMarkdown
