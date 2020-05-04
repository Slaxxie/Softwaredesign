let sentence: string = prompt("Bitte gebe einen Satz ein.");

console.log(reverseLetters(sentence));
console.log(reverseWords(sentence));
console.log(reverseWordsAndLetters(sentence));


function reverseLetters(sentence: string): string {
    let reverseLettersString: string = sentence;
    let reverseLettersArray: string[] = reverseLettersString.split("");
    reverseLettersArray = reverseLettersArray.reverse();
    let sentenceReverseLetters: string = reverseLettersArray.toString();
    return sentenceReverseLetters;
}

function reverseWords(sentence: string): string {
    let reverseWordString: string = sentence;
    let reverseWordArray: string[] = reverseWordString.split(" ");
    reverseWordArray = reverseWordArray.reverse();
    let sentenceReverseWords: string = reverseWordArray.toString();
    return sentenceReverseWords;
}

function reverseWordsAndLetters(sentence: string): string {
    let reverseWordsAndLettersString: string = sentence;
    let reverseWordsAndLettersArray: string[] = reverseWordsAndLettersString.split(" ");
    let i: number = 0;
    //let sentenceReverseWordsAndLetters: string; 
    while ( i < reverseWordsAndLettersArray.length - 1) {
        let temp: string = reverseWordsAndLettersArray[i];
        //temp = temp.split("").reverse().join("");
        temp = temp.reverse(); //Man kann einen String nicht reversen
        let sentenceReverseWordsAndLetters: string;
        sentenceReverseWordsAndLetters = sentenceReverseWords + " " + temp; // Kann nicht auf andere Variablen zugreifen
        i += 1;
    }
    return sentenceReverseWordsAndLetters;
}