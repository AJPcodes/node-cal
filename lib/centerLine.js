"use strict";

//center the line
const centerLine = (line) => {

	while (line.length < 22) {
	 	line += " ";
	 	if (line.length < 22) {
	 	line = " " + line;
 	 	}
	}

	return line;
}

module.exports = {
	centerLine: centerLine
}