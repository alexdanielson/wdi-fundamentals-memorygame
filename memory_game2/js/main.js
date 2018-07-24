

console.log("Up and running!");



var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images 2/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images 2/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images 2/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images 2/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function(){ 
  document.getElementsByTagName('src')[0].setAttribute(cards[cardId].cardImage);
  if (cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
    } else { (cardsInPlay[0] !== cardsInPlay[1]);
		console.log("Sorry, try again.");
  }
};



var flipCard = function () {
  this.getAttribute('data-id')[cardId];
  var cardId = cardsInPlay.length;
  
  cardsInPlay.push(cards[cardId].rank);
  var listCardId = function() {
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i].rank);
    }
  };

checkForMatch();
console.log("User flipped " + cards[cardId].suit);
console.log("User flipped " + cards[cardId].cardImage);
};


var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
}
var cardElement = document.createElement('img');
cardElement.setAttribute('img', 'images/back.png');
cardElement.setAttribute('data-id', i);
document.addEventListener('click', flipCard);
// fix this document.appendChild("game-board");
};
createBoard();




