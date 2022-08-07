const Engineer = require('../lib/Intern');
const engineer = new Intern('test', '12345', 'testmail', 'testing')

test('test constructor values', () => {
   expect(engineer.name).toBe('test');
   expect(engineer.id).toBe('12345');
   expect(engineer.email).toBe('testmail');
   expect(engineer.extension).toBe('testing');
});

test('test name from getName', () => {
    expect(engineer.getName()).toBe('test');
});

test('test id from getID()', () => {
    expect(engineer.getID()).toBE('12345');
});

test('test email from getEmail', () => {
    expect(engineer.getEmail()).toBe('testmail');
});

test('test school', () => {
    expect(engineer.getSchool()).toBe('appleton');
});

test('test role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
