// Calcolare il perimetro di un cerchio dato il raggio.

// Dichiarazione della variabile `raggio` e assegnazione del valore 5
let raggio = 5;

// Calcolo del perimetro del cerchio
let perimetro = 2 * Math.PI * raggio;

/*
Documentazione ufficiale della libreria Math:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Ci sono molte costanti e funzioni matematiche disponibili nella libreria Math, tra cui:
- Math.PI: il valore di π (pi greco)
- Math.E: il valore di e (numero di Nepero)
- Math.sqrt(x): calcola la radice quadrata di x
- Math.pow(x, y): calcola x elevato alla y
- Math.abs(x): calcola il valore assoluto di x
- Math.sin(x), Math.cos(x), Math.tan(x): calcolano il seno, coseno e tangente di x (in radianti)
- Math.log(x), Math.exp(x): calcolano il logaritmo naturale e l'esponenziale di x
- Math.floor(x), Math.ceil(x), Math.round(x): arrotondano x all'intero inferiore, superiore o al più vicino
- Math.min(x, y, ...), Math.max(x, y, ...): restituiscono il minimo o il massimo tra x, y, ...
- Math.random(): restituisce un numero casuale tra 0 e 1
- Math.trunc(x): restituisce la parte intera di x
- Math.sign(x): restituisce il segno di x (1 se x è positivo, -1 se x è negativo, 0 se x è zero)
*/

// Stampa del perimetro in console
console.log(perimetro);