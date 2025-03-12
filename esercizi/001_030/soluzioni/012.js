// Concatenare due stringhe e convertirle in maiuscolo.

// Dichiarazione delle variabili `stringa1` e `stringa2` e assegnazione dei valori "Ciao" e "Mondo"
let stringa1 = "Ciao";
let stringa2 = "Mondo";

// Concatenazione delle due stringhe
let concatenazione = stringa1 + " " + stringa2;

// Conversione della stringa concatenata in maiuscolo
let maiuscolo = concatenazione.toUpperCase();

// La stringa è un oggetto e quindi ha dei metodi
// Uno di questi è `toUpperCase` che converte la stringa in maiuscolo
// Altri metodi:
// - `toLowerCase` che converte la stringa in minuscolo
// - `charAt(i)` che restituisce il carattere in posizione specificata i
// - `indexOf(char)` che restituisce la posizione del carattere specificato
// - `slice(start, end)` che restituisce una sottostringa tra due posizioni

// Stampa della stringa in maiuscolo in console
console.log(maiuscolo);