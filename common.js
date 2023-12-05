import fs from 'fs';

/**
 * @param {string} path
 * @returns {string[]}
 */
export function readInputToArrayOfStrings(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString();
    return data.split('\n');
  } catch (e) {
    console.error('Error:', e.stack);
    return [];
  }
}

/**
 * 
 * @param {string} input
 * @returns string
 */
export function extractNumbersFromString(input){
  const matches = input.match(/\d+/g);

  if(!matches){
    return ''
  }

  const numbers = []
  
  matches.forEach(match => {
    numbers.push(...match.split(''))
  })

  return numbers
}