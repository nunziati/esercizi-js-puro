// Verificare se un numero è divisibile per 3 e 5 contemporaneamente.

// Dichiarazione della variabile `numero` e assegnazione del valore 15
let numero = 15;

// Controllo se il numero è divisibile per 3 e 5 contemporaneamente
let divisibile = (numero % 3 === 0) && (numero % 5 === 0);

/*
L'operatore %:
- restituisce il resto della divisione tra due numeri.
- Se il resto è 0, allora il primo numero è divisibile per il secondo.
*/

/*
L'operatore &&:
- restituisce true se entrambe le condizioni sono vere.
- restituisce false se almeno una delle due condizioni è falsa.

Gli altri operatori logici sono:
- || (OR): restituisce true se almeno una delle condizioni è vera.
    - Esempio:
        let divisibile_per_uno_dei_due = (numero % 3 === 0) || (numero % 5 === 0);

- ! (NOT): restituisce il valore opposto di una condizione.
    - Esempio:
        let non_divisibile_per_nessuno_dei_due = !(numero % 3 === 0) && !(numero % 5 === 0);
*/

/*
L'operatore ===:
- restituisce true se i due valori sono uguali.
- restituisce false se i due valori sono diversi.

Differenza con l'operatore ==:
- L'operatore == converte i valori prima di confrontarli (variabili di tipo diverso possono risultare uguali).
- L'operatore === restituisce true solo se i valori sono uguali e dello stesso tipo.
*/

// Stampa del risultato del controllo in console
console.log(divisibile);