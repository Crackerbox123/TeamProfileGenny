const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

test("Set school", () => {
    const testValue = String;
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})

test("set name ", () => {
    const testValue = String;
    const e = new Intern(testValue, 1, "test@test.com", "school");
    expect(e.getName()).toBe(testValue);
})

test("set id", () => {
    const testValue = 1;
    const e = new Intern("Foo", testValue, "test@test.com", "school");
    expect(e.getID()).toBe(testValue);
})

test("set email", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue, "school");
    expect(e.getEmail()).toBe(testValue);
})