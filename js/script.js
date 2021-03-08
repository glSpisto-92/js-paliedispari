// Crea una funzione per capire se la parola è
//  palindroma.

var wordPalindrom = prompt('Inserisci parola e scopri se è palindroma!');

function palindroma(parolaArg){

  var wordReverse = "";

  for( var i = parolaArg.length - 1; i >= 0; i-- ){

    wordReverse = wordReverse + parolaArg[i];

    console.log(wordReverse);
  }

  if( wordReverse == parolaArg){

    alert('la parola è palindroma')

  } else {

    alert('la parola non è palindroma');
  }

}
palindroma(wordPalindrom);




// Snack 2.
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// var pariDispari = prompt('Scegli pari o dispari');
// var numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
//
//
// function random (numero){

  // alert('il numero sorteggiato per la cpu è ' + Math.floor(Math.random() * 5 + 1));
