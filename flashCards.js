var createNewCard = document.getElementById("new-card")
const buttonPress = document.getElementById("button")
var hiddenDiv = document.getElementsByClassName("hidden")
// var hiddenDiv = document.getElementById("hidden")
var pushCard = document.createElement("DIV")

infoHashes =[ {question: "Here", answer: "Also here"},
            {question: "Stuff", answer: "Also stuff"}]

function getArrayInfoToDisplay(){
  //something to do with the hidden array
}

//create a function called AddCard -- create  the card in html, and put the data into it that I want
//then append it to the section that I want it to display to -- flex container

function addCard(){
  var answer = infoHashes[0].answer
  hiddenDiv[0].innerHTML =  answer
}

function removeHide(){
  buttonPress.addEventListener('click', () => {
    answer.classlist.remove("hide"),
  })
  return addCard
}

//answer.classlist.


// need 2 buttons 
  // a1.classList.remove("hide");
// });
// hideButton1 = document.getElementById('hide-button1');
// hideButton1.addEventListener('click', () => {
//   a1.classList.add("hide")
// })



buttonPress.addEventListener("click", addCard)
function showAnswer(){
  return addCard
}

// createNewCard.addEventListener("click", makeNewCard)
// function makeNewCard(){
// }