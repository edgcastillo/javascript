var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running", "television" ]
}

/*console.log(day1.squirrel);
console.log(day1);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log(day1);*/

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1.value == object3.value);
console.log(object1 == object3);
console.log(object1 == object2);
object1.value = 17;
console.log(object1 == object2);
console.log(object2)

myArray = [];
myArray.push("Edwin Castillo");
myArray.push("edgcastillo");
function cutName(str){
    return str.split(" ");
  }

var myData = {
  fullName: cutName(myArray[0]),
  skype: cutName(myArray[1]),
  github: "edgcastillo",
}

console.log(myData);


var person ={
	name:'edwin',
	sex:'M',
	age:'36',
}
for(var key in person){
	console.log(person[key]);
}
person.name = "Manuel";
person['age'] = 83;
for(var key in person){
	console.log(person[key]);
}
var newPerson = {}
newPerson.name = "Ender";

var arr = []
arr['cat'] = 1
arr['0'] = "yes"
console.log(arr['cat']);
console.log(arr[0]);