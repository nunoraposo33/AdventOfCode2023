import fs from 'fs';

/**
 * @param var string
 * @returns {string[]}
 */
export function readInput(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString();
    return data.split('\n');
  } catch (e) {
    console.log('Error:', e.stack);
    return [];
  }
}
