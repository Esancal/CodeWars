// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  arr = Array.from(String(num), Number);

  let squareDigitsNum = ""; // Para que al ingresar los valores de cada digito no se sumen
  // Sino, se consideren un String
  for (let i = 0; i < arr.length; i++) {
    squareDigitsNum += arr[i] * arr[i];
  }
  return parseInt(squareDigitsNum); // parseInt para transformar el String a numero
}
