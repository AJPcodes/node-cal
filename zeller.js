"use strict";

let modifiedMonth = (month) => {
  if (month == 1 || month == 2) {
  return month + 12;
  } else {
  return month;
}
};

let modifiedYear = (year, month) => {
  if (month == 1 || month == 2) {
    return year -1;
  } else {
  return year;
	}
};

module.exports = {

modifiedMonth: (m) => {
  return modifiedMonth(m);
},

modifiedYear: (y, m) => {
  return modifiedYear(y, m);
},

getDay: (y, m, d) => {
  var mm = modifiedMonth(m);
  var my = modifiedYear(y, m);

  return (d + parseInt(((mm + 1) * 26) / 10) + my + parseInt(my / 4) + 6 * parseInt(my / 100) + parseInt(my / 400) - 1) % 7;
}

}
