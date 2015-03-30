function countBs(string, c){
	var count = 0
	for(var i = 0; i < string.length; i++){
		if(string[i].toLowerCase() == c)
			count += 1;
	}
	return count
}

console.log(countBs("BBB", "b"));
console.log(countBs("kakkerlak", "k"));