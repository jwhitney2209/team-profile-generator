// imports
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
// const generateHTML = require('./src/generateHTML.js')

const managers = [];
const engineers = [];
const interns = [];

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
  .then(function(res) {
    const manager = new Manager(
      res.name, 
      res.id, 
      res.email, 
      res.officeNumber
      );
      console.log(manager)
      managers.push(manager)
  })
  .then(function(){
    addNew()
  });
};

const addInternEngineer = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "What is the team member's role?",
      choices: ['Engineer', 'Intern']
    },
  ])
  .then(function(data){
    switch (data.role) {
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
        .then(function(res) {
          const engineer = new Engineer(
            res.name,
            res.id,
            res.email,
            res.github
          );
          console.log(engineer);
          engineers.push(engineer);
        })
        .then(function() {
          addNew();
        });
        break;
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
        .then(function(res) {
          const intern = new Intern(
            res.name,
            res.id,
            res.email,
            res.school
          );
          console.log(intern);
          interns.push(intern);
        })
        .then(function() {
          addNew();
        });
        break;
    }
  })
};

const addNew = () => {
  console.log(`
  =====================
   Add New Team Member
  =====================
  `)
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmAdd',
      message: 'Would you like to add a new team member?',
      default: false
    },
  ])
  .then(function(res) {
    if(res.confirmAdd === true) {
      addInternEngineer();
    } else {
      console.log(`Done!`);
      endPrompt(managers, engineers, interns);
    }
  })
};

function endPrompt(managers, engineers, interns) {
  console.log(`Success! HTML File has been generated! Please check your /dist directory for the file`);
  // const html = generateHTML(managers, engineers, interns);
}


function init() {
  console.log(`
=================
 Add New Manager
=================
`)
  addManager();
}

init();
