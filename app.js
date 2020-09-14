const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./style")

const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")


let finalTeamArray = [];

//First Message When Starting App
function startingPrompt() {
    inquirer.prompt([
        {
            message: "Welcome To The Team Profile Generator. Please Input Your Team Name:",
            name: "teamnames"
        }
    ])
        .then(function (data) {
            const teamNames = data.teamnames
            finalTeamArray.push(teamNames)
            addManager();
        })


}
// manager code below
function addManager() {
    inquirer.prompt([
        {
            message: "What Is The Team Manager's Name?",
            name: "name"
        },
        {
            message: "What Is The Team Manager's Email Address?",
            name: "email"
        },

        {
            type: "number",
            message: "What Is The Team Manager's Office Number?",
            name: "officeNumber"
        },
    ])
        //Construct Team Manager's Information To Be Pushed To Final Form
        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers();
        });

}
//Asks If More Team Members Need To Be Added
function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do You Need To Add More Team Members?",
            choices: ["Add An Engineer", "Add An Intern", "No, The Team Is Complete"],
            name: "addMemberData"
        }
    ])
        //After Asking, Program Lets User Add An Engineer, Add An Intern or The Form and Team Is Completed
        .then(function (data) {
            //Add An Engineer
            switch (data.addMemberData) {
                case "Add An Engineer":
                    addEngineer();
                    break;
                //Add An Intern
                case "Add An Intern":
                    addIntern();
                    break;
                //Team Is Complete, Form Will Compile   
                case "No, The Team Is Complete":
                    compileTeam();
                    break;
            }
        });
}
//Add An Engineer
function addEngineer() {
    inquirer.prompt([
        {
            message: "What Is The Engineer's Name?",
            name: "name"
        },
        {
            message: "What Is The Engineer's Email Address?",
            name: "email"
        },
        {
            message: "What Is The Engineer's Github Profile?",
            name: "github"
        }
    ])
        //Compile's Information About Engineer Provided From Query
        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};
//Asks Inter's Information
function addIntern() {
    inquirer.prompt([
        {
            message: "What Is The Intern's Name?",
            name: "name"
        },
        {
            message: "What Is The Intern's Email Address?",
            name: "email"
        },
        {
            message: "What Is The Intern's 'Alma Mater'/School?",
            name: "school"
        }
    ])
        //Compiles Intern's Information From Query Above
        .then(function (data) {
            const name = data.name
            const id = finalTeamArray.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeamArray.push(teamMember)
            addTeamMembers()
        });

};

function compileTeam() {
    console.log("Team Profile Completed! A HTML File Has Been Generated.")
    //HTML Doc
    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${finalTeamArray[0]}</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap" rel="stylesheet">
        <style>
            ${style}
        </style>
    </head>
<body>
        <div class="banner-bar">
            <h1>${finalTeamArray[0]}</h1>
        </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./Team_${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {

    })
}

startingPrompt()