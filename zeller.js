"use strict";

let modifiedMonth = (month) => {
  if (month == 1 || month == 2) {
  return month + 12;
  }
  return month;
};

let modifiedYear = (year, month) => {
  if (month == 1 || month == 2) {
    return year -1;
  }
  return year;
};







module.exports = {

modifiedMonth: (month) => {
  return modifiedMonth(month);
},

modifiedYear: (year, month) => {
  return modifiedYear(year, month);
},

getDay: () => {}

}
