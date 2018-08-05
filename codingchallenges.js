
function isPalindrome(phrase) { // solving without using reverse method 
	let newPhrase = "";
	for (let i = 0; i < phrase.length; i++) {
		if (phrase[i] != " ") {
			newPhrase = phrase[i] + newPhrase;
		}
	}
	let phraseWithoutSpaces = phrase.split(" ").join("");
	if (phraseWithoutSpaces === newPhrase) {
		return true;
	} else {
		return false;
	}


}

function isPermutation(str1, str2) {
	if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
	return true } else {
	return false 
}
}

