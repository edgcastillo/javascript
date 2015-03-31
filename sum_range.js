function range(start, end, step){
	var rangeArray = []

	if(typeof step != 'number') step = 1;

	if(start < end){
		for(var i = start; i <= end; i += step)
			rangeArray.push(i);
	} else {
		for(var i = start; i >= end; i += step)
			rangeArray.push(i);
	}

	return rangeArray;
}

function sum(arrayNums){
	var total = 0;
	for(var x = 0; x < arrayNums.length; x++){
		total += arrayNums[x];
	}
	return total;
}

console.log(sum(range(1,10)));
console.log(sum(range(1,10,2)));
//console.log(typeof 55);
console.log(range(1,10,3));
console.log(sum(range(5,2,-1)));