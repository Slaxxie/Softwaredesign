"use strict";
//Wieviel bytes Speicherplatz benötigen die o.a. numerischen Datentypen jeweils?
//uint: 4 byte
//short: 2 byte
//byte: 1 byte
//long: 8 byte
//double: 8 byte
//float: 4 byte
//decimal: 16 byte
//char: 2 byte
//Wieviel Speicherplatz in bytes benötigt die Zeichenkette "Hello, World" ?
//24 bytes
//Vergleicht den Umfang der darstellbaren Zahlen zwischen int und short, sowie zwischen float und double. Wie groß ist jeweils der größte und der kleinste Wert? Wie groß ist der kleinste positive mit float darstellbare Wert?
//Was heißt Fließkommazahl und was heißt Festkommazahl? Für welchen Anwendungsbereich ist decimal besonders geeignet? Warum?
//Warum darf der Programmierer horst seine Lieblingsvariable nicht nach seiner Freundin else benennen? :-)
//Da Variablen nicht nach C# Schl+sselwörtern, z.B if - else, benannt werden dürfen
//Variablen deklarieren
let i = 42;
let pi = 3.1415;
let salute = "Hello World";
//Array
let ia = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
console.log(ia[2] * ia[8] + ia[4]);
console.log(ia.length);
ia.splice(0, 3);
console.log(ia.length);
let array1 = [3.1415, 2.71828, 2.97 * 10 ^ (-19)];
for (let value of array1) {
    console.log(value);
}
//Strings
let meinString = "Dies ist ein String";
let firstString = "Dies ist ";
let secondString = "ein String";
let resultString = firstString + secondString;
let stringEins = "eins";
let stringZwei = "zwei";
let stringDrei = "eins";
let firstStringEqualsSecondString = (firstString == secondString);
let firstStringEqualsResultString = (firstString == resultString);
console.log(meinString);
console.log(resultString);
console.log(firstStringEqualsSecondString);
console.log(firstStringEqualsResultString);
let inputString = prompt("Zwei Zahlen, getrennt durch : eingeben", "10:2");
let inputArray = inputString.split(":");
let inputNumber1 = +inputArray[0];
let inputNumber2 = +inputArray[1];
//Verzweigungen
if (inputNumber1 > inputNumber2) {
    console.log("Input 1 ist größer als Input 2");
}
else {
    console.log("Input 2 ist größer als Input 1");
}
if (inputNumber1 > 3 && inputNumber2 == 6) {
    console.log("Du hast gewonnen!");
}
else {
    console.log("Leider verloren.");
}
//switch / case
let color = prompt("Gib deine Lieblings-Grundfarbe ein");
switch (color) {
    case "Rot":
        console.log("Du hast Rot eingegeben");
        break;
    case "Blau":
        console.log("Du hast Blau");
        break;
    case "Grün":
        console.log("Du hast Grün eingegeben");
        break;
    default:
        console.log("Die Farbe " + color + " ist keine Grundfarbe");
        break;
}
if (color == "Rot") {
    console.log("Du hast Rot eingegeben");
}
else if (color == "Blau") {
    console.log("Du hast Blau eingegeben");
}
else if (color == "Grün") {
    console.log("Du hast Grün eingegeben");
}
else {
    console.log("Die Farbe " + color + " ist keine Grundfarbe");
}
//Schleifen
let whileInit = 1; //Initialisierung
while (whileInit <= 10) { //Bedingung
    console.log(whileInit);
    whileInit += 1; //Inkrement
}
//# sourceMappingURL=L02_programmieren.js.map