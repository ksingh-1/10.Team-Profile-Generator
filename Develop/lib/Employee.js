// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name=null, id=null, email=null){
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getName() { //Get Name
        return this.name;
    }

    getId() { // Get Id
        return this.id;
    }

    getEmail() { //Get Email Address
        return this.email;
    }

    getRole() { //Role
        return "Employee";
    }
}
module.exports=Employee;