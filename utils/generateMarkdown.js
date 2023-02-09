// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license != 'None' ) {
    badge = "![License Badge](https://img.shields.io/badge/license-" + license + "-orange);"
  }
  return badge;
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""; 

    //switch statement to check if selected license. If so, save the associated link to licenseLink var.
    switch(license) {
    case "APACHE": 
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.txt"
    break; 
    case "BSD": 
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
    break;
    case "GPL": 
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.txt"
    break;
    case "MIT": 
      licenseLink = "https://opensource.org/licenses/MIT"
    break;
    default:
      licenseLink = ""; 
    }
    return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseSection = ""; 
  if (license != 'None') {
    licenseSection += '## License\n'
    licenseSection += 'Visit ' + renderLicenseLink(license) + ' for more information.\n'
    licenseSection += renderLicenseBadge(license) + '\n'
  }
return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let markdown = '# ' + data.projectname + '\n';
    markdown += '## Description\n';
    markdown += data.projectdescription + '\n';
    markdown += '## Install Instructions\n';
    markdown += data.installinstructions + '\n';
    markdown += '## Intended Use\n';
    markdown += data.intendeduse + '\n';
    markdown += '## Collaborators & 3rd Party Tech\n';
    markdown += data.collaborators + '\n';
    markdown += renderLicenseSection(data.license);
    markdown += '## Contact\n';
    markdown += data.gitusername + '\n';
    markdown += data.emailcontact + '\n';

  return markdown;
}

module.exports = generateMarkdown;
