var puzzlers = [function(a){return 8 * a - 10;}, function(a){return (a - 3) * (a - 3) * (a - 3);},
				function(a){return a * a + 4;}, function(a){return a % 5;}];



var test = puzzlers[0](puzzlers[3](9));
console.log(test);


//Testing clousure
function warningMaker(obstacle){
	return function(){
		console.log("Beware! There have been " + obstacle + " sightings in the Cove today!");
	};
}

var message = warningMaker("Bigfoot");
message();


function assignTorpedo(name,passengerArray){
	for(var i = 0; i < passengerArray.length; i++){
		if(passengerArray[i] == name){
			return function(){
				console.log("Ahoy " + name + "!\n" + "Man your post at Torpedo #" + (i + 1) + "!");
			};
		}
	}
}

//cleaner version
function assignTorpedo1(passengerArray){
	return function(name){
		for(var i = 0; i < passengerArray.length; i++){
			if(passengerArray[i] == name){
				console.log("Ahoy " + name + "!\n" + "Man your post at Torpedo #" + (i + 1) + "!");
			}
		}
	}
}

var subPassengers = ["Luke","Leia","Han","Chewie","Yoda","R2-D2","C-3PO","Boba"];
var giveAssignment = assignTorpedo("Chewie",subPassengers);
giveAssignment();

var giveAssignment1 = assignTorpedo1(subPassengers);
giveAssignment1("Yoda");


//Another test starts here!!!
var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];


function makeTargetAssigner(sharks, targets){
	return function(shark){
		for(var i = 0; i < sharks.length; i++){
			if(shark == sharks[i]){
				console.log("What up, " + shark + "!\n" + "There've been " + targets[i] + " sightings in our 'hood!\n" + 
					  "Time for a swim-by lasering, homie!");
			}
		}
	};
}

var getTargetFor = makeTargetAssigner(listOfSharks,listOfTargets);
getTargetFor("Ice Teeth");

//Hoisting example - Javascript will move all the variable declaration to the top of their scope
console.log(state);
var state = "ready"; // in this case the var state is first declare but at the moment we call 
                     // the variable, state value is undefined
                     // you would expected a reference error because state is not declared yet
                     // but the variable is declare behind the scenes. 
function capacityStatus(numPassengers, capacity){
	if(numPassengers == capacity){
		noSeats();
	}else{
		seatsAvail();
	}
	noSeats = function(){
		console.log("No seats left!");
		return false;
	}
	seatsAvail = function(){
		console.log("There are seats left!");
		return true;
	}
}

capacityStatus(60, 60);
