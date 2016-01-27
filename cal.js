#!/usr/bin/env node
'use strict';
//1753 - 9999
const [,, ...args] = process.argv;
console.log(args);


const displayMonth = require('./lib/month.js');

const theDate = new Date();
const currentYear = theDate.getFullYear();
const currentMonth = theDate.getMonth() + 1;
const currentDate = theDate.getDate();

let output = displayMonth.getMonth(currentYear, currentMonth, currentDate);

console.log(output);