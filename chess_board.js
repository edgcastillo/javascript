/* Cheating version
for(var i = 1; i < 8; i++){
	for(var x = i; x <= i; x++){
		console.log("# " + "# " + "# " + "# ")
		console.log(" #" + " #" + " #" + " #")
	}
}*/

var size = 8;
var board = "";

for(var i = 0; i < size; i++){
	for(var x = 0; x < size; x++){
		if((i + x) % 2 == 0)
			board += " ";
		else
			board += "#";
		
	}
	board += "\n"
}

console.log(board)