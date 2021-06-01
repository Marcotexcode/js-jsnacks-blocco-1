




//  // ************** ESERCIZIO 3 ************** //

// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array



var array = [];

for (var i = 0; i < 6; i++) {
    insNum = parseInt(prompt('Inserisci 6 numeri'));
    if(insNum % 2 != 0){
        array.push(insNum);
    }
}

console.log(array);




