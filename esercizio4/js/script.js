



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





// CORREZIONE

// 1- creare un array con i nomi degli invitati
var arrayInv = ['Eli' , 'Giacomo' , 'Cristina' , 'Luca'];

//2- chiedere all'utente il suo nome
var nomeUtente = prompt('Come ti chiami?');

var messagioUtente = 'non puoi entrare';


// 3- controllare se l'utente fa parte della lista degli invitati
for(var i = 0; i < arrayInv.length; i++){ //i = 0

    if (nomeUtente === arrayInv[i]) {

        console.log('puoi entrare');

    }else {

        console.log('non puoi entrare');

    }    

} // Ma zero e minore di arrayInv.length (che in realta e 4)?


//4- comunicare all utente se puo entrare alla festa
alert(messagioUtente);