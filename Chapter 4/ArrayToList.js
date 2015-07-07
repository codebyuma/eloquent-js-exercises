
//Eloquent Javascript - chapter 4 exercises

/*Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a 
listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list 
and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns 
the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.*/

// Your code here.
var arrayToList = function (inputArray){
  var newList = {
    value: null,
    rest: null
  };
 for (i=inputArray.length-1; i>=0; i--)
 {
   // local variable object whose values are assigned to the current list's values. struggled with this concept.
   // can't just do newList2 = newList as that just points to the newList object and changes
   // as I change newList. Closure... 
   var newList2 = {
     value: newList.value,
     rest: newList.rest
   };
   newList.value = inputArray[i];   
   if (i==inputArray.length-1)
     newList.rest = null;
   else
     newList.rest = newList2;
 }
  return newList;
}

// easier once i figured out the above one - now that I know how to store object's values into a temp var instead of poiting to the same object and modifying it
// textbook suggests using for (var node = list; node; node = node.rest) {}
var listToArray = function (inputList) {
  var finalArray =[];
    var tempList= {
      value: inputList.value,
      rest: inputList.rest
    };
    var counter=0;
    while (tempList.rest!=null){
    finalArray[counter]=tempList.value;
        tempList = tempList.rest;
        counter++;
    }
    finalArray[counter]=tempList.value;
    return finalArray;
}

/*Also write the helper functions prepend, which takes an element and a list 
and creates a new list that adds the element to the front of the input list, */

var prepend = function (element, inputList){
  var newList = {
    value: element,
    rest: inputList
  };
  return newList;
}

/*nth, which takes a list and a number and returns the element at the 
given position in the list, or undefined when there is no such element.*/
// textbook suggests using for (var node = list; node; node = node.rest) {}
var nth = function (inputList, number){
  var newList = {
    value: inputList.value,
    rest: inputList.rest
  };
  if (newList.rest == null){
    if (number==0)
      return newList.value;
    else
      return undefined;
  }
  
  for (i=0; i<number; i++){
    newList=newList.rest;
    if (newList==null)
      break;
  }
  if (newList==null)
    return undefined;
  return newList.value;

}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

