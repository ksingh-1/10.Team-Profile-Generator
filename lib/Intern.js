const Employee = require("./employee")
//Define constant

//Intern Info
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.title = "Intern";
    }
    //School Info
    getSchool() {
        return this.school;
    }
    //Role Info
    getRole() {
        return this.title;
    }
}

module.exports = Intern