class Employee { //Employee Information
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = "Employee";
        this.email = email;
    };
    //Name of Employee
    getName() {
        return this.name;
    };
    //ID Information
    getId() {
        return this.id;
    };
    //Employee Email
    getEmail() {
        return this.email;
    };
    //Employee Title
    getRole() {
        return this.title;
    };
}


module.exports = Employee;