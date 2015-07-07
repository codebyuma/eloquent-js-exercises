
//Eloquent Javascript - chapter 4 exercises

/*Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.*/

// tried to get around it but forgot that object references point to same object, so actually need to modify object to make a change //
// could have swapped elements, first and last, second and second last, and so on
//
var reverseArray = function (inputArray){
	var newArray = [];
  	for (i=0; i<inputArray.length; i++)
      newArray.unshift(inputArray[i]);
  	return newArray;
}

var reverseArrayInPlace = function (inputArray){
  	var tempHold;
  	var inputArrayLength = inputArray.length;
  	var tempArray = [];
  	for (i=0; i<inputArrayLength; i++){
      tempHold=inputArray.shift();
      tempArray[i]=tempHold;
  	}
  	for (i=0; i<inputArrayLength; i++){
      inputArray.unshift(tempArray[i]);
  	}
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
