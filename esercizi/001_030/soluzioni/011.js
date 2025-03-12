// Calcolare il valore assoluto di un numero senza usare `Math.abs()`.

// Dichiarazione della variabile `numero` e assegnazione del valore -10
let numero = -10;

// Calcolo del valore assoluto
let valoreAssoluto = numero < 0 ? -numero : numero;

// Operatore ternario:
// Se `numero` è minore di 0, allora restituisci `-numero`, altrimenti restituisci `numero`.
// variabile_risultato = condizione ? valoreSeVero : valoreSeFalso
// condizione deve essere un'espressione che restituisce true o false

// Stampa del valore assoluto in console
console.log(valoreAssoluto);