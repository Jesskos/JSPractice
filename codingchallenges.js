
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

function makeBinarySearch(arr, elToFind) { // searches for an element in a sorted array 
    let left = 0;
    let right = arr.length-1
    let found = false;
	while (left < right) {
        let mid = Math.floor((left + right)/2)
        console.log(`mid index: ${mid}`)
        console.log(`mid value: ${arr[mid]}`)
		if (arr[mid]>elToFind) {
			right = mid -1 
		} else if (arr[mid] < elToFind) {
			left = mid + 1
		} else if (arr[mid]===elToFind) {
			return `${elToFind} found at index ${mid}`
		}
		
	}
	return `${elToFind} not found`
}
