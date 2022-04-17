// import modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');

// empty arrays to store objects
let employees = [];

// Initial prompt to user after init is invoked. 
const addManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please enter the team manager's name: (Required)",
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the managers's ID#: (Required)",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log('Please enter an ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email: (Required)",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter an email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the manager's office number: (Required)",
      validate: office => {
        if (office) {
          return true;
        } else {
          console.log('Please enter an office number!');
          return false;
        }
      }
    }
  ])
  // save responses to new Manager array
  .then(function(res) {
    const manager = new Manager(
      res.name, 
      res.id, 
      res.email, 
      res.officeNumber
      );
      console.log(manager.getRole())
      employees.push(manager)
  })
  .then(function(){
    addNew();
  });
};

// prompt user for new member to finish
const addNew = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Would you like to add an engineer, intern, or finish building your team?",
      choices: ['Engineer', 'Intern', 'Finish Building Team']
    },
  ])
  // begin switch/case after option is selected
  .then(function(res){
    switch (res.role) {
      // prompt questions when user select's engineer
      case 'Engineer':
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name: (Required)",
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID#: (Required)",
            validate: id => {
              if (id) {
                return true;
              } else {
                console.log('Please enter an ID!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email: (Required)",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log('Please enter an email!');
                return false;
              }
            }
          },
          {
          type: 'input',
          name: 'github',
          message: "Please enter the engineer's github username: (Required)",
          validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter a github username!');
              return false;
            }
          },
          }
        ])
        // save responses to new engineer object
        .then(function(res) {
          const engineer = new Engineer(
            res.name,
            res.id,
            res.email,
            res.github
          );
          employees.push(engineer);
        })
        .then(function() {
          addNew();
        });
        break;
      // Prompt questions if user selects Intern
      case 'Intern':
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name: (Required)",
            validate: name => {
              if (name) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID#: (Required)",
            validate: id => {
              if (id) {
                return true;
              } else {
                console.log('Please enter an ID!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email: (Required)",
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log('Please enter an email!');
                return false;
              }
            }
          },
          {
          type: 'input',
          name: 'school',
          message: "Please enter the intern's school: (Required)",
          validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter a school!');
              return false;
            }
          },
        }
        ])
        // save responses to new Intern Object
        .then(function(res) {
          const intern = new Intern(
            res.name,
            res.id,
            res.email,
            res.school
          );
          employees.push(intern);
        })
        .then(function() {
          addNew();
        });
        break;
      // finish the inquirer and begin writeFile()
      case 'Finish Building Team':
      writeFile(employees);
      console.log('Done!');
      break;
    }
  })
};

// write file after user prompts have been answered
function writeFile(employees) {
  const html = generateHTML(employees)
  fs.writeFile('./dist/index.html', html, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Success! HTML File has been generated! Please check your /dist directory for the file`);
  })
  // const html = generateHTML(managers, engineers, interns);
};

// starts the application
function init() {
  console.log(`
=================
 Add New Manager
=================
`)
  addManager();
};

init();