/************************************************************
 *  Execution     :  1. default node  cmd> node LeapYear.js
 *                   2. if nodemon installed  cmd> nodenom LeapYear.js
 *
 *  Purpose       :  Determines Whether a year is leap year is or not?
 *
 *  @description
 *
 *  @file         : LeapYear.js
 *  @overview     : LeapYear module to check whether user given year is leap year or not.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 15-11-2020
 *
 *************************************************************/

/**
*readline module provides an interface for reading data from readable stream one line
*/

const readline = require('readline');
const userInput = readline.createInterface(
    {
        /* @param {object} readline
         * var {object} userInput
         */
        input: process.stdin,
        output: process.stdout
    });