// Convertire una stringa in numero con `Number()`.

// Dichiarazione della variabile `stringa` e assegnazione del valore "123"
let stringa = "123";

// Conversione della stringa in numero
let numero = Number(stringa);

// Esistono anche `parseInt()` e `parseFloat()`, che convertono la stringa anche se contiene testo
// parseInt("123") -> 123
// parseFloat("123.45") -> 123.45
// parseInt("123piùAltroTesto") -> 123
// parseFloat("123.45piùAltroTesto") -> 123.45

// Stampa del numero convertito in console
console.log(numero);