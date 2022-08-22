//const { describe } = require('yargs');
const Employee = require('../lib/employee')


test("employee contructor instantiated", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("test setting name", () => {
    const testValue = String;
    const e = new Employee(testValue , 1, "test@test.com", "Employee");
    expect(e.getName()).toBe(testValue);
})

test("test setting id", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue, "test@test.com", "Employee");
    expect(e.getID()).toBe(testValue);
})

test("test setting Email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue, "Employee");
    expect(e.getEmail()).toBe(testValue);
})

test("test settting role", () => {
    const testValue = "Employee";
    const e = new Employee("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
})
