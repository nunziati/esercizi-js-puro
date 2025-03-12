// Invertire i bit di un numero binario. (Esempio, il numero 5 in binario è 101, invertendo i bit diventa 010, che è il numero 2).

// Dichiarazione della variabile `numero` e assegnazione del valore 5 (binario: 101)
let numero = 5;

// Conversione del numero in binario, inversione dei bit e riconversione in decimale
let numeroBinario = numero.toString(2); // "101"
let numeroInvertito = "";
for (let i = 0; i < numeroBinario.length; i++) {
    numeroInvertito += numeroBinario[i] === "0" ? "1" : "0";
}
let numeroInvertitoDecimale = parseInt(numeroInvertito, 2);

// Stampa del numero invertito in console
console.log(numeroInvertitoDecimale);