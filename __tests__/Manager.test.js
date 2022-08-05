const Manager = require('../lib/Manager');
const manager = new Manager('test', '12345', 'testmail', '123')

test('test constructor values', () => {
   expect(manager.name).toBe('test');
   expect(manager.id).toBe('12345');
   expect(manager.email).toBe('testmail');
   expect(manager.extension).toBe('123');
});

test('test name from getName', () => {
    expect(manager.getName()).toBe('test');
});

test('test id from getID()', () => {
    expect(manager.getID()).toBE('12345');
});

test('test email from getEmail', () => {
    expect(manager.getEmail()).toBe('testmail');
});

test('test extension # from xxxxxxxx', () => {
    expect(manager.getOfficeNumber()).toBE('123');
});

test('test role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});
