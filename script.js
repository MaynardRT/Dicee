function diceRoll() {
	// Dice 1
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomDiceImage = "dice" + randomNumber1 + ".png";
	var randomImageSource = "images/" + randomDiceImage;
	var image1 = document.querySelectorAll("#main img")[0];
	image1.setAttribute("src", randomImageSource);

	// Dice 2
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
	document.querySelectorAll("#main img")[1].setAttribute("src", randomImageSource2);

	// Logic
	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
	} else if (randomNumber1 < randomNumber2) {
		document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
	} else {
		document.querySelector("h1").textContent = "🏴 Draw 🏴";
	}
}