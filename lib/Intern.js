const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
};

module.exports = Intern;