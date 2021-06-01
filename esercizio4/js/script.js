



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

