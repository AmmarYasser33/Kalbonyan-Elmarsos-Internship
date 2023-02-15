/*
const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Ammar.");
fs.appendFileSync("notes.txt", "\nappend this string.");
*/

/*
const sum = require("./Utils.js");
console.log(sum(9, -4));
*/

/*
const { isEmail, isURL } = require("validator");

console.log(isEmail("ammar@gmail.com"));
console.log(isURL("goggle"));
*/

import chalk from "chalk";

console.log(chalk.bgMagenta("Ammar Yasser"));
console.log(chalk.blue.bgRed.bold("Hello!"));
