import { readInputToArrayOfStrings, extractNumbersFromString, replaceAll } from '../common.js';

const input = readInputToArrayOfStrings('./day1/demo2.txt');

let sum = 0;

input.forEach((line) => {
    const translatedLine = replaceSpelledOutNumbers(line)
    const numbers = extractNumbersFromString(translatedLine)
  
    if(numbers.length === 0){
        return
    }
  
    const firstNumber = numbers[0];
    const lastNumber = numbers[numbers.length-1]

    console.log(line, translatedLine, firstNumber, lastNumber)

    sum = sum + Number(firstNumber.toString() + lastNumber.toString());
});

/**
 * 
 * @param {string} inputString 
 * @returns {string}
 */
function replaceSpelledOutNumbers(inputString) {
    const numberMapping = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    };
  
    const replacedString = inputString.replace(/\b(?:one|two|three|four|five|six|seven|eight|nine)\b/gi, match => {
      return numberMapping[match.toLowerCase()];
    });
  
    return replacedString;
  }

  
console.log('Response is: ' + sum);
