// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let res = 0; // Variable para guardar la cantidad de vocales
  for (i = 0; i < str.length; i++) {
    // Defino que letras se contaran (vocales)
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      res += 1; // Le sumo 1 al contador
    }
  }
  return res; // Regreso la cuenta total de las vocales
}

// Esta funcion la copie y analice
function getCount2(str) {
  return (str.match(/[aeiou]/ig)||[]).length; // "||[]" -> Esta parte proteje en caso que sea enviado un null
  // .match obtiene todas las ocurrencias de una expresion regular dentro de un string
  // "/[aeiou]/ig" -> expresion regular con un patron al interior 
  // "[aeiou]" -> En este caso, no se ingresa un patron como tal (se ingresa un Array)
  // Esto con el objetivo de que cada parte del interior sea tomado como caracter o un patron por si solo
  // Entonces buscara el patron "a", el patron "e", y asi.
  
  // la "i" en "ig" permite que ignore si es mayuscula o minuscula
  // la "g" en "ig" permite a la expresion no detenerse al encontrar uno de las vocales
  // sin la g se detendra en la primera vocal encontrada, ademas el orden de "ig" no importa, podria ser "gi"

  // Finalmente con .length se realiza la cuenta
}
console.log(getCount2("hola"));