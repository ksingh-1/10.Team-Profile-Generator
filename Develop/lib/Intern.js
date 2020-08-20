// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee=require("./Employee");

class Intern extends Employee {
    constructor(name=null, id=null, email=null, school=null) {
        super(name, id, email);
        this.school=school;
    }

    getRole(){
        return this.school;
    }

    getSchool(){
        return this.school;
    }
}
module.exports=Intern;