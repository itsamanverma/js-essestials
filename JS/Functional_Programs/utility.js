var util = require('util');
module.exports = {
    /******************************************************************************
     *  Execution       :   1. default node         cmd> node LeapYear.js 
     *                      2. if nodemon installed cmd> nodemon LeapYear.js
     * 
     *  Purpose         : Determines whether a year is leap or not.
     *
     *  @description    
     * 
     *  @file           : LeapYear.js
     *  @overview       : LeapYear module to check whether user given year is leap or not.
     *  @module         : LeapYear - This is optional if expeclictly its an npm or local package
     *  @author         : AMAN VERMA <amanvermame786@gmail.com>
     *  @version        : 2.0
     *  @since          : 16-11-2020
     *
     ******************************************************************************/

    checkLeapYear(year) {
        if (year.length == 4 ) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                console.log(year + " Year is leap year");
            }
            else {
                console.log(year + " Year is not leap year");
            }
        }
        else {
            console.log("please enter the valid year");
        }
    },
}