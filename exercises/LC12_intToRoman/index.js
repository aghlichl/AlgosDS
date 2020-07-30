var intToRoman = function (num) {
  //initialize the denominations and starting variables
  const numberArray = [1000, 500, 100, 50, 10, 5, 1];
  let roman = "";
  let arabic = num;

  //loop through with if statement logic
  for (let j = 0; j < numberArray.length; j += 1) {
    let quantity = Math.floor(arabic / numberArray[j]);

    if (quantity > 0) {
      roman += addLetters(quantity, numberArray[j]);
      arabic -= quantity * numberArray[j];
      quantity = Math.floor(arabic / numberArray[j]);
    }

    if (quantity === 0 && j % 2 === 0) {
      if (arabic >= numberArray[j] - numberArray[j + 2]) {
        roman += numbers[numberArray[j + 2]] + numbers[numberArray[j]];
        arabic -= numberArray[j] - numberArray[j + 2];
      }
    }

    if (quantity === 0 && j % 2 !== 0) {
      if (arabic >= numberArray[j] - numberArray[j + 1]) {
        roman += numbers[numberArray[j + 1]] + numbers[numberArray[j]];
        arabic -= numberArray[j] - numberArray[j + 1];
      }
    }
  }

  return roman;
};

//helper function to add Letters to the final roman number
const addLetters = (quantity, value) => {
  let string = "";
  for (let z = 0; z < quantity; z += 1) {
    string += numbers[value];
  }
  return string;
};

const numbers = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
