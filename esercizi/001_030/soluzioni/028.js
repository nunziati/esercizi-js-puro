// Verificare se un numero intero è palindromo. Ad esempio, per il numero 12321, il risultato è true. Indizio: cerca di ottenere il numero invertito e verifica se è uguale al numero originale. Indizio 2: puoi convertire un numero in stringa con il metodo `toString()`. Poi cerca i metodi delle stringhe più utili in questo caso.

// Dichiarazione della variabile `numero` e assegnazione del valore 12321
let numero = 12321;

// Conversione del numero in stringa
let numeroStr = numero.toString();

let numeroInvertitoStr = numeroStr.split('').reverse().join('');

// Verifica se la stringa è uguale alla sua versione invertita
let isPalindromo = numeroStr === numeroInvertitoStr;

// Stampa del risultato in console
console.log(isPalindromo);
