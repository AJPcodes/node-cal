'use strict';
//1753 - 9999
const [,, ...args] = process.argv;

const validateArgs = require('./validateArgs.js');
const displayMonth = require('./month.js');
const displayYear = require('./year.js');

//validate the arguments
const validatedArgs = validateArgs.validate(args);
if (!validatedArgs) {
	process.exit();
}

//read and manage passed arguments
const [yearArg, monthArg, dayArg] = validatedArgs;

if (yearArg && monthArg) {
	let output = displayMonth.getMonth(yearArg, monthArg, dayArg);
	console.log(output);
}

if (yearArg && !monthArg) {
	let output = displayYear.getYear(yearArg);
	console.log(output);
}
