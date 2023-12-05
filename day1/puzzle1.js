import { readInputToArrayOfStrings, extractNumbersFromString } from '../common.js';

const input = readInputToArrayOfStrings('./day1/input1.txt');

let sum = 0;

input.forEach((line) => {
  const numbers = extractNumbersFromString(line)
  
  if(numbers.length === 0){
    return
  }
  
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length-1]

  sum = sum + Number(firstNumber.toString() + lastNumber.toString());
});

console.log('Response is: ' + sum);
