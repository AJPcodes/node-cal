'use strict';
// tests to write:
// 6 week mo 8/2015
// 5 week mo 10/2015
// 4 week mo 2/2015
// 30 day month 11/2015
// 31 day month 12/2015
// Fed Leap year 2/2012
// Feb non leap 2/2014
// Some bad years e.g. 'a', 1000, 100000, -2 etc.
//
//
const expect = require('chai').expect;
const execSync = require('child_process').execSync;

describe('cal', () => {
  describe.skip('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();
      expect(output).to.equal(goal);
    });

    it('should handle a 6 week month', () => {
      const goal = execSync('cal 8 2015').toString();
      const output = execSync('./cal.js 2015 8').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 5 week month', () => {
      const goal = execSync('cal 10 2015').toString();
      const output = execSync('./cal.js 2015 10').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 4 week month', () => {
      const goal = execSync('cal 2 2015').toString();
      const output = execSync('./cal.js 2015 2').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 30 day month 11/2015', () => {
      const goal = execSync('cal 11 2015').toString();
      const output = execSync('./cal.js 2015 11').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 31 day month 12/2015', () => {
      const goal = execSync('cal 12 2015').toString();
      const output = execSync('./cal.js 2015 12').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a leap year 2/2012', () => {
      const goal = execSync('cal 2 2012').toString();
      const output = execSync('./cal.js 2012 2').toString();
      expect(output).to.equal(goal);
    });

    it('should handle a non leap year 2/2014', () => {
      const goal = execSync('cal 2 2014').toString();
      const output = execSync('./cal.js 2014 2').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a full year 2014', () => {
      const goal = execSync('cal 2014').toString()
      const output = execSync('./cal.js 2014').toString()
      // expect(output.join("")).to.equal(goal.join(""));
      expect(output).to.equal(goal);
    });

    it('should handle a full year 1886', () => {
      const goal = execSync('cal 1886').toString()
      const output = execSync('./cal.js 1886').toString()
      expect(output).to.equal(goal);
    });

  });

  describe("CenterLine", () => {
    const centerLine = require('../lib/centerLine').centerLine;

    it('it adds whitespace to make a string longer', () => {
      expect(centerLine("a").length).to.equal(22);

    });
  });

  describe("Validate args", () => {
    const validateArgs = require('../lib/validateArgs.js');
    const currentDate = new Date();
    const compareArr = [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()];

    it('return the current date when no arguments are passed', () => {
      expect(validateArgs.validate([])[0]).to.equal(compareArr[0]);
      expect(validateArgs.validate([])[1]).to.equal(compareArr[1]);
      expect(validateArgs.validate([])[2]).to.equal(compareArr[2]);
    });

    it('return the formatted date when a correct argument is passed', () => {
      expect(validateArgs.validate([2015,2])[0]).to.equal(2015);
      expect(validateArgs.validate([2015,2])[1]).to.equal(2);
    });

    it('return just the year when only 1 argument is passed', () => {
      expect(validateArgs.validate([2015])[0]).to.equal(2015);
    });

    it('return null for too many arguments', () => {
       expect(validateArgs.validate([2,2,3,4])).to.be.a('null');
    });

    it('return null for invalid arguments', () => {
      expect(validateArgs.validate(['a'])).to.be.a('null');
      expect(validateArgs.validate([-1])).to.be.a('null');
      expect(validateArgs.validate([1600, 3])).to.be.a('null');
      expect(validateArgs.validate([100000, 3])).to.be.a('null');
      expect(validateArgs.validate([1600, 3])).to.be.a('null');
      expect(validateArgs.validate([1800, 18])).to.be.a('null');
      expect(validateArgs.validate([1900, 'a'])).to.be.a('null');
    });

  });

  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zeller.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
      it('return 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
    });

    describe('.modifiedYear', () => {
      it('returns 2014 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      it('returns 2015 for Feb 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
      it('returns 2017 for March 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 5 (Friday) for January 1, 2016', () => {
        expect(zellers.getDay(2016, 1, 1)).to.equal(5);
      });
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
       it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
        it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
        it('returns 4 (Thursday) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
    });
  });
});
