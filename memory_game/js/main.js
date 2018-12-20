var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// var cardOne = cards[0];
// cardsInPlay.push(cardOne);

// console.log(`User flipped ${cardOne}`);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);

// console.log(`User flipped ${cardTwo}`);

// if (cardsInPlay.length === 2) {
//   if (cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
//   } else {
//     alert("Sorry, try again.");
//   }
// }

function flipCard(cardId) {
  console.log(`User flipped ${cards[cardId]}`);
  cardsInPlay.push(cards[cardId]);
}

function checkMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

flipCard(0);
flipCard(2);
console.log(cardsInPlay);
checkMatch();
