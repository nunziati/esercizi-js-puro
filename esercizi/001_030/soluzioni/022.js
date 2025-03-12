// Verificare se tre numeri possono formare un triangolo.

// Dichiarazione delle variabili `a`, `b` e `c` e assegnazione dei valori 3, 4 e 5
let a = 3;
let b = 4;
let c = 5;

// Per poter formare un triangolo, la somma di due lati deve essere maggiore del terzo lato.
// Per capire questo criterio, prova a disegnare un triangolo in cui i lati non rispettano questa regola (per esempio 3, 4 e 8).
// Inoltre, ovviamente, i lati di un triangolo devono essere positivi.

// Controllo se i tre numeri possono formare un triangolo
let lunghezzePositive = a > 0 && b > 0 && c > 0;
let sommaLunghezze = a + b > c && a + c > b && b + c > a;

let possonoFormareTriangolo = lunghezzePositive && sommaLunghezze;

// Stampa del risultato del controllo in console
console.log(possonoFormareTriangolo);