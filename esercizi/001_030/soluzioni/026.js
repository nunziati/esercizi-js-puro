// Determinare se una stringa rappresenta un numero valido.

// Dichiarazione della variabile `stringa` e assegnazione del valore "123"
let stringa = "123";

// Controllo se la stringa rappresenta un numero valido
let eNumeroValido = !isNaN(stringa);

/*
L'idea è di provare a convertire la stringa in un numero e poi controllare cos'è venuto fuori.
La funzione isNaN, se riceve una stringa, prova a convertirla in un numero.
Se la conversione non riesce, restituisce NaN (un valore speciale che sta per "Not a Number").
Se la conversione riesce, restituisce il numero convertito.
Quindi, se la stringa rappresenta un numero valido, la funzione restituirà false (perché il numero convertito non è NaN).
Se la stringa non rappresenta un numero valido, la funzione restituirà true (perché il numero convertito è NaN).

Altri esempi:
let stringaConvertita = Number(stringa);
let eNumeroValido = !isNaN(stringaConvertita);

Anche Number prova a convertire la stringa in un numero.
Se la conversione non riesce, restituisce NaN.
Se la conversione riesce, restituisce il numero convertito.
Quindi, se la stringa rappresenta un numero valido, la variabile eNumeroValido sarà false.
Se la stringa non rappresenta un numero valido, la variabile eNumeroValido sarà true.
*/

// Stampa del risultato del controllo in console
console.log(eNumeroValido);