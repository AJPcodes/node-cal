"use strict";
//1753 - 9999
const validate = (argsArr) => {
	var parsedArgs = argsArr.map(function(arg){ return parseInt(arg) });

	if (argsArr.length > 2) {
  	console.log('Too many arguments\nPlease enter your requested year and month as follows: YYYY MM');
  	return null;
  } else if (argsArr.length === 0) {
  	 const currentDate = new Date();
 		 return [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()]
  } else if (isNaN(parsedArgs[0])) {
	  	console.log('Sorry, only number inputs are valid.\nPlease enter a year 1753 to and month as follows: YYYY MM');
  	return null;
  } else if (parsedArgs[0] < 1753 || parsedArgs[0] > 9999) {
	  	console.log('Sorry, this app uses the Gregorian calendar, which was adopted in 1752\nPlease enter a year 1753 to 9999 and month as follows: YYYY MM');
  	return null;
  } else if (argsArr.length == 1) {
  	return parsedArgs;
  } else if (isNaN(parsedArgs[1])) {
	  	console.log('Sorry, only number inputs are valid.\nPlease enter a year 1753 to and month as follows: YYYY MM');
  	return null;
  } else if (parsedArgs[1] < 1 || parsedArgs[1] > 12) {
	  	console.log('Sorry, you must use the numbers 1 through 12 to indicate the month.\nPlease enter a year 1753 to 9999 and month as follows: YYYY MM');
  	return null;
  } else {
  	return parsedArgs;
  }


  // return null;
};

module.exports = {validate: validate};
