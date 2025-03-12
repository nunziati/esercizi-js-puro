// DIFFICILE: Determinare se un numero è una potenza di 2. Indizio: questo esercizio si risolve considerando la rappresentazione binaria dei numeri interi.

// Dichiarazione della variabile `numero` e assegnazione del valore 16
let numero = 16;

// Controllo se il numero è una potenza di 2
let ePotenzaDiDue = (numero & (numero - 1)) === 0 && numero !== 0;

// Stampa del risultato del controllo in console
console.log(ePotenzaDiDue);