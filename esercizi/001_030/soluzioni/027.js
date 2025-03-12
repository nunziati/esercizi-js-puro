// Calcolare l'area e la lunghezza di un'ellisse, date le lunghezze dei semiassi maggiore e minore. Calcola la migliore approssimazione possibile. Se non conosci la formula, puoi cercarla online.

// Dichiarazione delle variabili `a` e `b` (semiassi maggiore e minore) e assegnazione dei valori 5 e 3
let a = 5;
let b = 3;

// Calcolo dell'area dell'ellisse
let area = Math.PI * a * b;

// Calcolo della circonferenza dell'ellisse (approssimazione di Ramanujan)
let circonferenza = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));

// Stampa dell'area e della circonferenza in console
console.log("Area:", area);
console.log("Circonferenza:", circonferenza);