function FindNeedle(haystack, needle) {
  // Solución 2 (n2)
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, needle.length + i) === needle) return i;
  }
  return -1;
}

// Solución 1   O(n*m)
// for (let j = 0; j < needle.length; j++) {
//   if (haystack[i + j] !== needle[j]) break;
//   if (j === needle.length - 1) return i;
// }

// Recorrer el haystack
// Preguntar si tenemos la primer letra del needle

//      OK => Buscamos si sigue la coincidencia
//      NO => Seguir recorriendo el haystack
//      Si terminamos de recorrer el needle => Retornar el índice porque encontramos la palabra

// Si terminamos de recorrer el haystack y no encontramos nada => -1

module.exports = FindNeedle;

console.log(FindNeedle("react-redux", "redux")); //(6);

console.log(FindNeedle("pinky", "puntual")); //(-1);

console.log(FindNeedle("rereredux", "reredux")); //(2);
