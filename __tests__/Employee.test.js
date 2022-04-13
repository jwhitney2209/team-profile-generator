const Employee = require('../lib/Employee.js');

test('creates and employee object', () => {
  const employee = new Employee('Dave', '1234', 'email');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test('gets employees name', () => {
  const employee = new Employee('Chester');

  expect(employee.getName()).toEqual(expect.any(String))
});

test('gets employees Id', () => {
  const employee = new Employee('1234');

  expect(employee.getId()).toEqual(expect.any(String));
});

test('get employee email', () => {
  const employee = new Employee('email');

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role', () => {
  const employee = new Employee('role');

  expect(employee.getRole()).toEqual(expect.any(String));
});