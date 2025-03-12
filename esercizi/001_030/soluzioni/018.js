// Convertire minuti in ore e minuti.

// Dichiarazione della variabile `minutiTotali` e assegnazione del valore 125 (per esempio)
let minutiTotali = 125;

// Calcolo delle ore e dei minuti
let ore = Math.floor(minutiTotali / 60);
let minuti = minutiTotali % 60;

// In alternativa, si può calcolare i minuti come segue:
// let minuti = minutiTotali - ore * 60;

// Stampa delle ore e dei minuti in console
console.log(ore + " ore e " + minuti + " minuti");