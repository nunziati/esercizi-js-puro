// Generare un numero casuale tra due valori min e max dati.

// Dichiarazione delle variabili `min` e `max` e assegnazione dei valori 5 e 15
let min = 5;
let max = 15;

// Generazione di un numero casuale tra `min` e `max`
let numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;

// Stampa del numero casuale in console
console.log(numeroCasuale);