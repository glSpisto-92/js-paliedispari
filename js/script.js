// Crea una funzione per capire se la parola è
//  palindroma.
//
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

//L' utente sceglie pari o dispari
do{
  var pariDispari = prompt("Scegli pari o dispari ");
} while ( pariDispari != 'pari' && pariDispari != 'dispari');

do{
  var numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
} while ( !(numUtente > 0  && numUtente <= 5) );

  //L' utente sceglie un numero da 1 a 5

  // Genero un numero random da 1 a 5 per il pc con una function
  function randomNumber (min, max) {

    return Math.floor(Math.random() *(max - min +1)) + min;
  }
  var numCpu = randomNumber(1, 5);
  alert('Il numero della CPU è il numero : ' + numCpu);

  // Sommo i due numeri
  var somma = numUtente + numCpu;

  // stabilisco se la somma dei numeri è pari o dispari con una funzione
  function sommaPoD (provaPod) {

    if( provaPod % 2 == 0 ){
      return 'pari';
    }else {
      return 'dispari';
    }
  }
  var prova = sommaPoD(somma);
  console.log('La somma dei numeri è : ' + prova);

  // Dichiaro il vincitore

  if ( pariDispari == prova ){
    alert('hai vinto!')

  }else {
    alert('hai perso!')
  }
