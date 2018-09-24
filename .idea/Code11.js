/**
 *   @author Tucker, Green
 *   @version 0.0.4
 *   @summary Project 1 code
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let Lotnum, QTYBedrooms, QTYBathrooms, QTYGarage;

const HOMEV = 50000 , BEDV = 17000 , BATHV = 12500 , GARAGEV = 6000

function main() {
    setLotnum();
    setQTYBedrooms();
    setQTYBathrooms();
    setQTYGarage()
    printResults();
    // This is a single line comment
}

main();

function setLotnum() {
    Lotnum = PROMPT.question("\nWhat is your Lot Number?:");
}

function setQTYBedrooms() {
    QTYBedrooms = PROMPT.question("\nHow many bedrooms?");
}

function setQTYBathrooms() {
    QTYBathrooms = PROMPT.question("\nHow many bathrooms?:");
}

function setQTYGarage() {
    QTYGarage = PROMPT.question('\nnumber of garages.')
}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nThe price of your home on lot number", +Lotnum + " " + "is", HOMEV + (BEDV * QTYBedrooms) + (BATHV * QTYBathrooms) + (GARAGEV * QTYGarage), "Dollars")
}