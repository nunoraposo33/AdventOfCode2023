import { readInput } from '../common.js';

const input = readInput('./day1/input1.txt');

let sum = 0;

input.forEach((line) => {
  let firstNumber;
  let lastNumber;

  for (let i = 0; i < line.length; i++) {
    const numericValue = Number(line.charAt(i));

    if (isNaN(numericValue)) {
      return;
    }

    console.log('Numeric V:', numericValue);

    if (typeof firstNumber === 'undefined') {
      firstNumber = numericValue;
    }

    lastNumber = numericValue;
  }

  if (typeof firstNumber === 'undefined') {
    firstNumber = 0;
  }

  if (typeof lastNumber === 'undefined') {
    lastNumber = 0;
  }

  sum = sum + Number(firstNumber.toString() + lastNumber.toString());
});

console.log('Response is: ' + sum);
