function startGame(difficulty) {
	let anagram;
	switch (difficulty) {
		case "Easy":
			anagram = randomise("Hello");
			break;
		case "Medium":
			anagram = randomise("Historic");
		case "Hard":
			anagram = randomise("Defenistrate");
	}

}

function randomise(word) {
	word = word.toLowerCase();
	let letters = word.split("");
	//window.alert(letters[0]);
	let length = word.length;
	let usedIndexes = [];
	//window.alert(length);
	let anagram = "";

	let anagramResult = document.getElementById("anagramResult");

	while (anagram.length != word.length) {
		let index = Math.floor(Math.random() * length);
		//window.alert(index);
		while (usedIndexes.includes(index)) {
			index = Math.floor(Math.random() * length);
		}
		let character = letters[index];
		anagram = anagram + character;
		//window.alert(anagram);
		usedIndexes[usedIndexes.length] = index;

	}

	if (word == anagram) {
		anagram = randomise(word);
	}

	anagramResult.innerHTML = anagram;
	return anagram;
}