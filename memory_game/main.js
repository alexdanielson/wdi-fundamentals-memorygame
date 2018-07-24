

console.log("Up and running!");


var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = ();
cardsInPlay.push(cards[cardId].rank);
// this may be the way to do it cardsInPlay.push(cards[0].rank);

var checkForMatch = function (){
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}


};

var flipCard = function (cardId){


var cardId = cards[cards.length]
//cardId[0]
//cardId[2]
//========>>>>go back over unit 9 to understand it better and to complete the assignment

/*
	cardsInPlay[cards.length]
		if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		}
		else (cardsInPlay[0] !== cardsInPlay[1])
		alert("Sorry, try again.");
*/
console.log("User flipped " + cards[cardId].rank);
console.log(cardImage);
console.log(suit);

}