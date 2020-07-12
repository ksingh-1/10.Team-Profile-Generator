const inquirer=require("inquirer");
const mysql=require("mysql");
const { start } = require("repl");
const { allowedNodeEnvironmentFlags } = require("process");

var connection=mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "",
    database:"employeetracker_db"
});

connection.connect(function (err){
    if (err) throw err;
    start();

});

function start(){
    inquirer.prompt ({
        name:"action",
        type:"lists",
        message:"What would you like to do?",
        choices: [
            "Add A Department",
            "Add A Role",
            "Add An Employee",
            "View Roles",
            "View All Employees",
            "Update Employee Role",
            "Exit"
        ]
    })

        .then(function(answer){
            switch (answer.action) {
                case "Add A Department":
                    addDeparment();
                    break;

                case "Add A Role":
                    addRole();
                    break;

                case "Add An Employee":
                    viewDepartment();
                    break;

                case "View Roles":
                    viewRole();
                    break;

                case "View All Employees":
                    viewEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;

                case "Exit":
                    connection.end();
                    break;
            };
        });
};

function addDepartment() {
    inquirer.prompt({
        inquirer.prompt({
            name:"Department",
            type:"input",
            message: "what is thename of the department?"
        })
            .then(function(answer){
                connection.query("Insert Into Department Set?",{
                    name: answer.Department
                })
                start()
            })
    })
}

function addRole(){
    inquirer.prompt([{
        name: "title",
        type: "input",
        message: "What is the title of the role?"
    },
    {
        name: "salary",
        type: "input",
        message: "What is the salary?"
    },
    {
        name: "departmentID",
        type: "input",
        message: "What is the department id that this role belongs to?"
    },
    ])
        .then(function (answer){
            connection.query("Insert into role set?", {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.departmentId
            })
            start()
        })

function addEmployee() {
    inquirer.prompt([{
        name: "firstName",
        type: "input",
        message: "What is the Employee's Name?"
        
    },
    {
        name: "lastName",
        type: "input",
        message: "What is the Employee's first name?"
    },
    {
        name: "roleId",
        type: "input",
        message: "What is the Employee's last name?"
    },
    {
        name: "roleId",
        type: "input",
        message: "What is the id of the role for this employee?"
    },
    {
        name: "ManagerId",
        type: "input,"
        message:"What is the id of the Manager for this employee?"
    }
])
        .then(function (answer){
            connection.query("Insert Into Employee Set?",{
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.roleId,
                manager_id: answer.ManagerId
            },
                function (err, answer) {
                    if (err) {
                        throw err:
                    }
                }
            )
        })
}
}