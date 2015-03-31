function reverseArray(arr){
	newArray = []
	for(var i = arr.length - 1; i >= 0; i--){
		newArray.push(arr[i]);
	}
	return newArray;
}

function reverseArrayInPlace(){

}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray(["A","B","C","D"]))