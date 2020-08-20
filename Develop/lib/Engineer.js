// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name=null, id=null, email=null, gitHubUrl=null) {
        super(name, id, email);
        this.github=gitHubUrl;
    }

    getRole() {
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}
module.exports=Engineer;