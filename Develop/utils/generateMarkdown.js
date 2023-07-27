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
function renderLicenseLink(license) {
let licenseLink = '';
  switch (license) {
    case 'No License':
      return '';
    case 'Apache':
    case 'GNU':
    case 'MIT':
  licenseLink = "[License](#license)";
  return licenseLink;
   
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  switch (license) {
    case 'No License':
      return '';
    case 'Apache':
    case 'GNU':
    case 'MIT':
  return `## License 
          ${license}`;
  return licenseSection;
   
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  let tableOfContents = `
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${licenseLink}
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Email](#email)
  - [Github](#github)`;

  if(data.license === "No License"){
    tableOfContents = `
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Email](#email)
  - [Github](#github)`;
  }

  return `# ${data.title}

  ${licenseBadge}

  ## Table of Contents
  ${tableOfContents}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.testing}

  ## Email
  For any questions please email me at ${data.email}.

  ## Github
  Please visit my Github page at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
