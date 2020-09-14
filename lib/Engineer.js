const Employee = require("./Employee")
//Employee Engineer Information
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.title = "Engineer"
    }
    //Github Info
    getGithub() {
        return this.github;
    }
    //Role Info
    getRole() {
        return this.title;
    }
}

module.exports = Engineer