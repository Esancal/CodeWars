// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" "); // Creo un Array de Strings

  let count = arr[0].length; // Seteo un valor mas bajo para la cuenta

  for (let i = 0; i < arr.length; i++) {
    // Repito el ciclo por el largo del array
    if (arr[i].length < count) {
      // Si el largo del array es menor al largo del seteo base:
      count = arr[i].length; // Se reemplaza el valor de "count" con el nuevo valor mas bajo al contar el largo del String
    }
  }
  return count;
}

// function findShort(s){ // Este lo obtuve como la respuesta de otras personas
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }