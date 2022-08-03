const Employee = require('./lib/Employee');
const employee = new Employee('Kalin', '12345', 'koestreicher4@gmail.com');

test('test values from employee() constructor', () => {
    expect(employe.name).toBe('Kalin');
    expect(employee.id).toBe('12345');
    expect(employee.email.toBe('koestreicher4@gmail.com'))
});

test('test getName() method', () => {
    expect(employee.getName()).toBe('Kalin');
});

test('test getID() method', () => {
    expect(employee.id).toBe('12345')
});

test('test getRole method', () => {
    expect(employee.getRole()).toBe('Employee');
});