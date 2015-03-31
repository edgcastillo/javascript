/*
  Correlation is a measure of dependence between variables. 
  It is usually expressed as a co-efficient that ranges from
  -1 to 1. Zero correlation means the variables are not related
  whereas a correlation of one indicates that the two are perfectly
  related - if you know one, you also know the other. Negative also
  means that the variables are perfectly related but the are opposites
  when one is true, the other is false. 
*/

// Correlation of Tempatures(tempC) and Ice Cream Sales(sales)
var tempC =[14.2,16.4,11.9,15.2,18.5,22.1,19.4,25.1,23.4,18.1,22.6,17.2];
var iceCreamSales =[215,325,185,332,406,522,412,614,544,421,445,408];

function calculateMeanA(arr){
	count = 0
	for(var i = 0; i < arr.length; i++)
		count += arr[i];
	mean = count / arr.length;
	return mean.toFixed(1);
}


function calculateMeanB(arr){
	count = 0
	for(var i = 0; i < arr.length; i++)
		count += arr[i];
	mean = count / arr.length;
	return mean.toFixed(0);
}

function subtractMean(mean,arr){
	dif = [] // array will store mean - arr(n)
	for(var i = 0; i < arr.length; i++)
		dif.push((arr[i] - mean).toFixed(1));
	return dif;
}

function calculateAB(a_values,b_values){
	totalAB = [];
	for(var i = 0; i < ((a_values.length + b_values.length) / 2); i++)
		totalAB.push((a_values[i] * b_values[i]).toFixed(0));
	return totalAB
}

function square(data){
	square_data = [];
	for(var i = 0; i < data.length; i++)
		square_data.push((data[i] * data[i]).toFixed(1));
	return square_data;
	
}

function getCorrelation(x,y,z){
	totalX = 0;
	totalY = 0;
	totalZ = 0;
	for(var i = 0; i < x.length; i++){
		totalX += parseInt(x[i]);
	}
	for(var i = 0; i < y.length; i++){
		totalY += parseInt(y[i]);
	}
	for(var i = 0; i < z.length; i++){
		totalZ += parseInt(z[i]);
	}
	result = ((totalX)/Math.sqrt((totalY * totalZ)));
	return result;
}

_xMean = calculateMeanA(tempC); //mean for temperature data
_yMean = calculateMeanB(iceCreamSales); // mean for sales data
a_values = (subtractMean(_xMean, tempC)); //mean - data in temperature
b_values = (subtractMean(_yMean, iceCreamSales)); //mean - data in sales
values_AxB = (calculateAB(a_values, b_values));
values_aSqr = (square(a_values));
values_bSqr = (square(b_values));
console.log(getCorrelation(values_AxB, values_aSqr, values_bSqr));


