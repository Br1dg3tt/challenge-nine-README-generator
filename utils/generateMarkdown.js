
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
    }
    return "";
  }

  function renderLicenseLink(license) {
    if (license !== "none") {
      return `\n* [License](#license)\n`;
    }
    return "";
  }
  
  function renderLicenseSection(license) {
    if (license !== "none") {
      return `## License
          
          Licensed under the ${license} license.`;
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }
  
  function generateMarkdown(data) {
    return `# ${data.title} 
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  [alt-text]("${data.screenshot}")
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contact-Me](#contact-me)
  * [Features](#features)
  * [Languages & Dependencies](#languages & dependencies)
  * [How to Use This Application](#How to Use This Application)
  * [Contributors](#contributors)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## Usage
  ## How to Use This Application:
  ${data.usage}
  ## Contact-Me
  * Name - ${data.name}
  * Email - ${data.email}
  * Github - [${data.creator}](https://github.com/${data.creator}/)
  ## Contributors
  ${data.contributors}
  ## Testing
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseSection(data.license)}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }
  
  module.exports = generateMarkdown;