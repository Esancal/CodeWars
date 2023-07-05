/*Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
  if (ending === "") return true; // No lo especificaba, sin embargo pedia cumplir esto
  return str.substr(-ending.length) == ending;
  // .substr permite cortar desde x cantidad de numeros en adelante
  // Si el numero es negativo, parte desde el final
}

solution("abc", "bc"); // returns true
solution("abc", "d"); // returns false

/*
Esta fue la solucion de otras personas, habia un metodo mas simple que el que use

function solution(str, ending){
  return str.endsWith(ending);
}
*/
