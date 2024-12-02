/*
**Logica**
1- genero 5 numeri random e li stampo a schermo
2- faccio partire il timer di 10 secondi
3- come scade il timer i numeri scompariranno e compariranno 5 input
4- una volta inseriti i 5 numeri indipendentemente dall'ordine, i numeri verrano controllati e verrà restituito il risultato che indicherà quanti e quali numeri sono stati indovinati */


//Assegno gli elementi del DOM
const boxes = document.querySelectorAll('li')
const inputs = document.querySelectorAll('input')

const title = document.getElementById('title')
const timer = document.getElementById('timer')
const btn = document.getElementById('btnConferma')
const message = document.getElementById('message')

//Dichiaro un array e genero 5 numeri casuali da 1 a 99
let numeriGenerati = getUniqueRandomNumber(1, 99, 5)
//per controllare i numeri generati in console
console.log(' i numeri generati sono ', numeriGenerati)

//Assegno ogni elelmento della li
for(let i = 0; i < boxes.length; i++){
  boxes[i].innerHTML = numeriGenerati[i];
}

//Faccio partire il timer di 10 secondi
let seconds = 10;
timer.innerHTML = seconds--;

const clock = setInterval(function(){
  timer.innerHTML = seconds;
  if(seconds === 0){

    //stoppo il timer
    clearInterval(clock)

    for(let i=0; i < boxes.length; i++){
      boxes[i].classList.toggle('hide')
    }
    for(let i=0; i < inputs.length; i++){
      inputs[i].classList.toggle('hide')
    }
    btn.classList.toggle('hide')

    //Modifico il titolo della pagina HTML per comunicare con l'utente
    title.innerText = 'Inserisci i numeri nelle caselle corrispondenti e clicca Conferma'
  }
  seconds--;
},1000)


btn.addEventListener('click', () => {

  //Assegno i valori in input ad un array
  let inputArray = [];

  for(let i = 0; i < inputs.length; i++){
    inputArray.push(parseInt(inputs[i].value))
  }

  //Confronto gli elementi generati con gli elementi inseriti, incrementando il contatore per ogni numero in comune
  let counter = 0
  let resultArray = []

  for(let i = 0; i < inputArray.length - 1; i++){
    if (numeriGenerati.includes(inputArray[i])) {
      counter++;
      resultArray.push(inputArray[i])      
    }
  }
  

  //Mostro il messaggio in base al risultato
  if(counter > 0 && counter < 5){
    message.innerText = `Hai indovinato ${counter} numeri su 5. Ecco quali ${resultArray}`
  } else if(counter === 0){
    message.innerText = 'GAME OVER!'
  } else if( counter === 5){
    message.innerText = 'Complimenti! Hai indovinato tutti i numeri!'
  }

  message.classList.toggle('hide')

})



//FUNCTIONS

//Genero numeri random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Genero un array random di numeri univoci e li restituisco in un array
function getUniqueRandomNumber(min, max, howMany) {
  let uniqueArray = []
  let randomNumber = 0
  while (uniqueArray.length < howMany) {
    randomNumber = getRandomNumber(min,max)
    if(!(uniqueArray.includes(randomNumber))){
      uniqueArray.push(randomNumber)
    }
  }
  return uniqueArray
}