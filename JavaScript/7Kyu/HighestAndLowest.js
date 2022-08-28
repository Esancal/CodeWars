// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let arr = numbers.split(" "); // separo el String por espacios a un array

  let min = arr[0]; // Le doy un valor base a las variables
  let max = arr[0];

  // Recorremos el array
  for (let i = 0; i < arr.length; i++) {
    if (min > parseInt(arr[i])) {
      // Si el valor del array es menor al valor de "min" se reemplazara
      min = arr[i];
    }
    if (max < parseInt(arr[i])) {
      // Si el valor del array es mayor al valor de "max" se reemplazara
      max = arr[i];
    }
  }
  return max + " " + min;
}
