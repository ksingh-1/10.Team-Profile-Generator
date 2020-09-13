// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name=null, id=null, email=null, officeNumber=null) {
        super(name, id, email);
        this.officeNumber=officeNumber;
    }
    
    getRole() { //Get Manager Role
        return "Manager";
    }
    getOfficeNumber() { //Get Office Telephone Number
        return this.officeNumber;
    }
}
module.exports=Manager;