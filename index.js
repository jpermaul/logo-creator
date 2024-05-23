const fs = require("fs");
const inquirer = require("inquirer")
const {Square, Circle, Triangle} = require("./lib/shapes")

inquirer
  .prompt([
    {
        name: "shape", 
        type: "list", 
        choices: ["Square","Circle","Triangle"], 
        message: "Choose a shape."
    }, 
    {
        name: "text", 
        message: "Choose up to three characters."
    }, 
    {
        name: "shapeColor", 
        message: "Enter a proper color name or hexadecimal value for the shape's color."
    }, 
    {
        name: "textColor", 
        message: "Enter a proper color name or hexadecimal value for the text's color."
    }, 

  ])
  .then((answers) => {
    if (answers.shape == "Square") {
        fs.writeFileSync("./dist/logo.svg", `
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="${answers.shapeColor}"/>
        <text x="5" y="15" fill="${answers.textColor}">${answers.text}</text>
        </svg>
        `)
    }
    if (answers.shape == "Circle") {
        fs.writeFileSync("./dist/logo.svg", `
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="${answers.shapeColor}" />
        <text x="5" y="15" fill="${answers.textColor}">${answers.text}</text>
        </svg>
        `)
    }
    if (answers.shape == "Triangle") {
        fs.writeFileSync("./dist/logo.svg", `
        <svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="20, 10 40, 180 60, 180" fill="${answers.shapeColor}"/>
        <text x="5" y="15" fill="${answers.textColor}">${answers.text}</text>
        </svg>
        `)
    }
  })
