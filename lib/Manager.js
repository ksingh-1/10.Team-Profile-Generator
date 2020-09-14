const Employee = require("./employee")
//Constant Declared

//Manager Info
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }
    //Manager Title
    getRole() {
        return this.title;
    }
    //Manager Office Number
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager