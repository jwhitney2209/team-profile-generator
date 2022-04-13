const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Dave', 1234, 'email', '123-A');

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});
