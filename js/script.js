


// // ************** ESERCIZIO 1 ************** //

// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.


/*
var  parola1 = prompt('inserisci prima parola');
var  parola2 = prompt('inserisci la seconda parola');


if (parola1.length < parola2.length) {

    console.log(parola1 + ' ' + parola2);

}else if (parola1.length === parola2.length) {

    console.log('sono uguali ' + parola2 + ' ' + parola1);

}else {
    
    console.log(parola2 + ' ' + parola1);
}
*/










// // ************** ESERCIZIO 2 ************** //

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri   inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.


// // ************** VERSIONE FOR ************** //

/*
var somma = 0;

for (var i = 0; i < 5; i++) {
    insNum = parseInt(prompt('Inserisci 5 numeri'));
    somma += insNum;
}

console.log(somma);
*/


// // ************** VERSIONE WHILE ************** //

/*

var somma = 0;

var i = 0;

while( i < 5) {
    i++;
    insNum = parseInt(prompt('Inserisci 5 numeri'));
    somma += insNum;
}

console.log(somma);
*/










//  // ************** ESERCIZIO 3 ************** //

// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array


/*
var array = [];

for (var i = 0; i < 6; i++) {
    insNum = parseInt(prompt('Inserisci 6 numeri'));
    if(insNum % 2 != 0){
        array.push(insNum);
    }
}

console.log(array);
*/










//  // ************** ESERCIZIO 4 ************** //


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



var invitati = ['Marco' , 'Giovanni' , 'Paolo' , 'Matteo' , 'Gabriele' , 'Enrico'];

var nomeUtente = prompt('Scrivi il tuo nome');

nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.substring(1).toLowerCase();

var trovato = 'Non puoi partecipare alla festa';


for (var i = 0; i < invitati.length; i++) {
    
    if (invitati[i] == nomeUtente) {
        trovato = 'Puoi partecipare alla festa';
    }
}

console.log(trovato);