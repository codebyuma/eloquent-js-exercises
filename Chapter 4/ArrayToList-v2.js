//Eloquent Javascript - chapter 4 exercises - second attempt


/*A list - REVIEW AGAIN

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.


1
var list = {
2
  value: 1,
3
  rest: {
4
    value: 2,
5
    rest: {
6
      value: 3,
7
      rest: null
8
    }
9
  }
10
};


A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.*/

function arrayToList(inputArray){
	var resultList= new Object ();
    resultList.value = inputArray[0];
  	if (inputArray.length==1){
       resultList.rest = null;
  	}
  	else {
      inputArray.shift();
      resultList.rest = arrayToList(inputArray);
  	}
    return resultList; 
}

function listToArray(inputList){
	var resultArray = [];
    var i =0;
  	while (inputList.rest!=null){
    	resultArray[i]=inputList.value;
    	i++
    	inputList=inputList.rest;
   	} 
    resultArray[i]=inputList.value;
    return resultArray;
}

function prepend (inputElement, inputList){
	var resultList = new Object ();
    resultList.value = inputElement;
    resultList.rest = inputList;
    return resultList;
}


function nth (inputList, inputNumber, count){
    if (count == undefined)
      count = 0;
    if (count == inputNumber)
      return inputList.value;
    else if (inputList.rest == null)
      return undefined;
    else{
      count++;
      return nth(inputList.rest, inputNumber, count);
    }
}

/*alternate version of nth*/
function nth2 (inputList, inputIndex){
    if (inputIndex==0)
      return inputList.value;
    else if (inputList.rest == null)
      return undefined;
    else {
      return nth2(inputList.rest, inputIndex-1);
    }      
}

console.log(arrayToList([4]));
// -> {value: 4, rest: null}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10])));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

