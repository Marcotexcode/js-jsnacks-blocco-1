




// // ************** ESERCIZIO 2 ************** //

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri   inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.


// // ************** VERSIONE FOR ************** //


var somma = 0;

for (var i = 0; i < 5; i++) {
    insNum = parseInt(prompt('Inserisci 5 numeri'));
    somma += insNum;
}

console.log(somma);



// // ************** VERSIONE WHILE ************** //



var somma = 0;

var i = 0;

while( i < 5) {
    i++;
    insNum = parseInt(prompt('Inserisci 5 numeri'));
    somma += insNum;
}

console.log(somma);








