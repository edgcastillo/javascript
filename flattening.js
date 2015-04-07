//Flatten an array

function flatArray(arr){
	newArray = [];
	for(var i = 0; i < arr.length; i++){
		for(var x = 0; x < arr[i].length; x++){
			newArray.push(arr[i][x]);
		}
	}
	return newArray
}

//Books version
// console.log(flatArray.reduce(function(flat,current){
// 	return flat.concat(current);
// },[]));

console.log(flatArray([[1,2,3], [4,5], [6]])) //=> [1,2,3,4,5,6]
