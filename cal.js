#!/usr/bin/env node
'use strict';

const zeller = require('./zeller');

// console.log('I\'m a non functioning cal app');

const theDate = new Date();
const currentYear = theDate.getFullYear();
const currentMonth = theDate.getMonth() + 1;
const currentDate = theDate.getDate();
const startDay = zeller.getDay(currentYear, currentMonth, 1);

let getEndDay = function(m){
  if (m === 12) {
  return zeller.getDay(currentYear + 1, 1, 1);
  } else {
  return zeller.getDay(currentYear, currentMonth + 1, 1);
  }
}

const endDay = getEndDay(currentMonth);

// console.log('startDay: ', startDay);
// console.log('endDay: ', endDay);

let monthAsString = "";
switch (currentMonth) {
  case 1:
  monthAsString = "January";
    break;
  case 2:
  monthAsString = "February";
    break;
  case 3:
  monthAsString = "March";
    break;
  case 4:
  monthAsString = "April";
    break;
  case 5:
  monthAsString = "May";
    break;
  case 6:
  monthAsString = "June";
    break;
  case 7:
  monthAsString = "July";
    break;
  case 8:
  monthAsString = "August";
    break;
  case 9:
  monthAsString = "September";
    break;
  case 10:
  monthAsString = "October";
    break;
  case 11:
  monthAsString = "November";
    break;
  case 12:
  monthAsString = "December";
    break;
  default:
  monthAsString = "January";
    break;
}


let output = "";

let positionToWrite = startDay;
let dateToWrite = 1;
let position = 0;

let line1 = `    ${monthAsString} ${currentYear}      \n`;
let line2 = "Su Mo Tu We Th Fr Sa  \n";

let drawLine = () => {
	let string = "";

	while (position < 7) {

		if (dateToWrite >= 28 && position == endDay) {

			while (position < 7) {
				string += '   ';
				position++;
			}
			string += " "
			return string;
			break;
		}

		if (position == positionToWrite) {

			if (dateToWrite == currentDate && currentDate >= 10) {
				string += dateToWrite.toString().split("").map((v) => {return "_\b" + v;}).join("") + " ";
			} else if (dateToWrite == currentDate && currentDate < 10) {
				string += " _\b" + dateToWrite+ " ";
			} else if (dateToWrite >= 10) {
				string += `${dateToWrite} `;
			} else {
				string += ` ${dateToWrite} `;
			}

			dateToWrite++;
			positionToWrite = (positionToWrite+1) % 7;
		} else {
			string += "   ";
		}
		position++

	}

	string += " \n";
	position = 0;

	return string;
};

let drawCalendar = () => {

	let string = "";

	while (dateToWrite <= 31) {
		string += drawLine();
	}

	return string;

};

output += line1 + line2 + drawCalendar();
console.log(output);
module.exports = output;

