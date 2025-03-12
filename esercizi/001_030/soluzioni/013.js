// Generare un numero casuale tra 1 e 100.

// Generazione di un numero casuale tra 1 e 100
let numeroCasuale = Math.floor(Math.random() * 100) + 1;

/*
Spiegazione passo per passo:
1. `Math.random()` genera un numero casuale tra 0 e 1 (escluso)
2. Moltiplicando il risultato per 100 otteniamo un numero decimale tra 0 e 100 (escluso)
3. `Math.floor()` arrotonda il numero all'intero più vicino (quindi tra 0 e 99, perché 100 è escluso)
4. Aggiungendo 1 otteniamo un numero tra 1 e 100

La formula generale per generare un numero casuale tra `min` e `max` è:
Math.floor(Math.random() * (max - min + 1)) + min

Prova a fare un ragionamento simile a quello sopra, per capire come funziona.
*/

// Stampa del numero casuale in console
console.log(numeroCasuale);