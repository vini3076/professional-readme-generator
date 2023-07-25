// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let staticBadge ='';

  switch (license) {
    case 'No License':
      return '';
    case 'Apache':
    case 'GNU':
    case 'MIT':
  staticBadge = `![Static Badge](https://img.shields.io/badge/License-${license}-blue)`;
  return staticBadge;
   
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}

  ${licenseBadge}

  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](contributions)
  [Email and Github](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}


`;
}

module.exports = generateMarkdown;
