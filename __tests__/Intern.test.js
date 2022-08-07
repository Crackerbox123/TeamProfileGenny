const Intern = require('../lib/Intern');
const intern = new Intern('test', '12345', 'testmail', 'appleton')

test('test constructor values', () => {
   expect(intern.name).toBe('test');
   expect(intern.id).toBe('12345');
   expect(intern.email).toBe('testmail');
   expect(intern.extension).toBe('123');
});

test('test name from getName', () => {
    expect(intern.getName()).toBe('test');
});

test('test id from getID()', () => {
    expect(intern.getID()).toBE('12345');
});

test('test email from getEmail', () => {
    expect(intern.getEmail()).toBe('testmail');
});

test('test school', () => {
    expect(intern.getSchool()).toBe('appleton');
});

test('test role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});
