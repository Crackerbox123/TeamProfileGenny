const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Set office number", () => {
    const testValue = 100;
    const e = new Manager("Luffy", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})

test("set id", () => {
    const testValue = 100;
    const e = new Manager("Sanji", testValue, "test@test.com", 1);
    expect(e.getId()).toBe(testValue);
})

test("set email", () => {
    const testValue = "test@test.com";
    const e = new Manager("Sanji", 1, testValue, 1);
    expect(e.getEmail()).toBe(testValue);
})

test("set name", () => {
    const testValue = String;
    const e = new Manager(testValue, 1, "test@test.com", 1);
    expect(e.getName()).toBe(testValue);
})