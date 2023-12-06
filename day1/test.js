function replaceSpelledOutNumbers(inputString) {
    // Define a mapping of spelled-out numbers to their numerical equivalents
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
  
    // Use a regular expression to find and replace spelled-out numbers in the string
    const replacedString = inputString.replace(/\b(?:one|two|three|four|five|six|seven|eight|nine)\b/gi, match => {
      // Convert the spelled-out number to its numerical equivalent
      return numberMapping[match.toLowerCase()];
    });
  
    return replacedString;
  }
  
  // Example usage:
  const inputString = "This is one example sentence with three spelled-out numbers.";
  const result = replaceSpelledOutNumbers(inputString);
  
  console.log(result);
  