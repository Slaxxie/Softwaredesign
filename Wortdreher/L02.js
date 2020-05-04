"use strict";
let sentence = prompt("Bitte gebe einen Satz ein.");
console.log(reverseLetters(sentence));
console.log(reverseWords(sentence));
console.log(reverseWordsAndLetters(sentence));
function reverseLetters(sentence) {
    let reverseLettersString = sentence;
    let reverseLettersArray = reverseLettersString.split("");
    reverseLettersArray = reverseLettersArray.reverse();
    let sentenceReverseLetters = reverseLettersArray.toString();
    return sentenceReverseLetters;
}
function reverseWords(sentence) {
    let reverseWordString = sentence;
    let reverseWordArray = reverseWordString.split(" ");
    reverseWordArray = reverseWordArray.reverse();
    let sentenceReverseWords = reverseWordArray.toString();
    return sentenceReverseWords;
}
function reverseWordsAndLetters(sentence) {
    let reverseWordsAndLettersString = sentence;
    let reverseWordsAndLettersArray = reverseWordsAndLettersString.split(" ");
    let i = 0;
    //let sentenceReverseWordsAndLetters: string; 
    while (i < reverseWordsAndLettersArray.length - 1) {
        let temp = reverseWordsAndLettersArray[i];
        //temp = temp.split("").reverse().join("");
        temp = temp.reverse(); //Man kann einen String nicht reversen
        let sentenceReverseWordsAndLetters;
        sentenceReverseWordsAndLetters = sentenceReverseWords + " " + temp; // Kann nicht auf andere Variablen zugreifen
        i += 1;
    }
    return sentenceReverseWordsAndLetters;
}
//# sourceMappingURL=L02.js.map