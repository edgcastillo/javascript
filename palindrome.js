// Given an array of strings with only lowercase letters, create a function that returns an array
// of those same strings, but each string has its letters rearranged such that it becomes a palindrome
// (if possible, if not, return -1)

var palindromes = ["amen icy cinema", "animal loots foliated detail of stool lamina", "avid diva", "ah satan sees natasha"];

var isPalindrome = function(palindromes){
	var testArray = [];
	var res = new RegExp("[a-z]");
	for(var i = 0; i < palindromes.length; i++){
		var myString = "";
		for(var x = palindromes[i].length - 1; x >= 0; x--){
			if(palindromes[i].charAt(x).match(res)){
				myString += palindromes[i][x];
			} 
		}
		testArray.push(myString);	
	}
	for(var y = 0; y < palindromes.length; y++){
		console.log(testArray[y].toLowerCase());
		if(palindromes[y].toLowerCase().split(' ').join('') !== testArray[y].toLowerCase()){
			palindromes[y] = "-1";
		}
	}
	return palindromes;
}

console.log(isPalindrome(palindromes));