// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

/* La razon por la que funciona, es debido a que number%2 solo podra tener como resultado
un 0 o un 1, entonces puede ser considerado booleano
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
*/