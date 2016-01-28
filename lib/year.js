"use strict";
//split and zip!
const displayMonth = require('./month.js');
const centerLine = require('./centerLine.js').centerLine;
const _ = require('lodash');

const getYear = (yearArg) => {

	let output = "";

	const buildRow = (firstMonth) => {

		let row = [];
		let month1Arr = displayMonth.getMonth(yearArg, firstMonth).split("\n").splice(1);
		let month2Arr = displayMonth.getMonth(yearArg, firstMonth + 1).split("\n").splice(1);
		let month3Arr = displayMonth.getMonth(yearArg, firstMonth + 2).split("\n").splice(1);

		row = _.zip(month1Arr, month2Arr, month3Arr);

		row =	_.map(row, chunk => chunk.join(""));
		row = row.join("\n") + "\n";
		row += "\n";
		return row;
	}

	const centerMonths = (month1, month2, month3) => {
		let string = centerLine(month1) + centerLine(month2) + centerLine(month3) + " \n";
		string = string.split("");
		string[0] = "";
		return string.join("");
	};

	var line1 =  `                            ${yearArg}\n`;
	output = 	line1 +
						centerMonths('January', 'February', 'March') +
						buildRow(1) +
						centerMonths('April', 'May', 'June') +
						buildRow(4) +
						centerMonths('July', 'August', 'September') +
						buildRow(7) +
						centerMonths('October', 'November', 'December') +
						buildRow(10);

	output = output.split("\n");
	while (output.length > 36) {
		output.pop();
	}
	return output.join("\n");
}

module.exports = {getYear: getYear}

