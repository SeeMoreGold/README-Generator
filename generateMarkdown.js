
// Function to create the license badge
function licenseBadge (license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// Function to create the license link
function licenseLink (license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// Function to create the license "div"
function licenseDiv (license) {
  if (license !== "None") {
    return (
      `## License
      
      This project licensed under the ${license} license.`
    )
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description

${data.info}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${licenseLink(data.license)}

* [Credits](#credits)

* [Contributing](#contribute)

* [Questions](#questions)

## Installation

Run the following command to install dependencies:

${data.installation}

## Usage

${data.usage}

${licenseDiv(data.license)}

## Credits

${data.credits}

## Contributing

${data.contribute}

## Questions

Contact me at ${data.email} if you have questions about this project.
See more of my work at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
