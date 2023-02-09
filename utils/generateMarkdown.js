// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license != 'None' ) {
    badge = "![License Badge](https://img.shields.io/badge/license-" + license + "-orange);"
  }
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
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseSection = ""; 

if (license != 'None') {
  markdown += '## License\n'
  markdown += 'Visit ' + renderLicenseLink(license) + ' for more information'
}

}
//name of project projectname
//description projectdescription
//install instructions installinstructions
//intended use intendeduse
//collaborators/3p collaborators
//licenses license
//git Username gitusername
//email emailcontact

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
}

module.exports = generateMarkdown;
