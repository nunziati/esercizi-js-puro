// Determinare il massimo tra quattro numeri senza usare `Math.max()`.

// Dichiarazione delle variabili `a`, `b`, `c` e `d` e assegnazione dei valori 10, 20, 30 e 40
let a = 10;
let b = 20;
let c = 30;
let d = 40;

// Determinazione del massimo tra `a` e `b` usando l'operatore ternario
let maxAB = a > b ? a : b;

// Determinazione del massimo tra `c` e `d` usando l'operatore ternario
let maxCD = c > d ? c : d;

// Determinazione del massimo tra `maxAB` e `maxCD` usando l'operatore ternario
let massimo = maxAB > maxCD ? maxAB : maxCD;

/*
Altre soluzioni sono comunque possibili:

let massimo = a;
massimo = b > massimo ? b : massimo;
massimo = c > massimo ? c : massimo;
massimo = d > massimo ? d : massimo;

*/

// Stampa del massimo in console
console.log(massimo);
