const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

test("Set engineer name", () => {
    const testValue = "userID";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
})

test("Set engineer role", () => {
    const testValue = String;
    const e = new Engineer(testValue, 1, "test@test.com", "Engineer")
    expect(e.getName()).toBe(testValue);
})

test("set Engineer ID", () => {
    const testValue = 100;
    const e = new Engineer("bob", testValue, "test@test.com", "Engineer")
    expect(e.getId()).toBe(testValue);
})