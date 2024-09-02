// ES6 Snack 5
// A partire da un array di stringhe, crea un secondo array formattando le stringhe
// del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const stringArray = ["pippo", "PLUTO", "Paperino"];

// Passaggio 1: Trasforma tutte le stringhe in minuscolo
const lowerCaseArray = stringArray.map((string) => string.toLowerCase());

// Passaggio 2: Capitalizza la prima lettera di ogni stringa nell'array minuscolo
const capitalizedArray = lowerCaseArray.map(
  (string) => string.charAt(0).toUpperCase() + string.slice(1)
);
// Output
console.log(capitalizedArray);

// In due passaggi, prima si trasforma tutto in minuscolo e poi si capitalizza la prima lettera di ogni stringa.

// In un singolo passaggio, si trasforma direttamente la prima lettera in maiuscolo
// e il resto della stringa in minuscolo, senza la necessità di fare due mappe separate.
const capitalizedArray2 = stringArray.map(
  (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
);
// Output
console.log(capitalizedArray2);
