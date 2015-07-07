//Eloquent Javascript - chapter 4 exercises - second attempt

/*Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".*/

/*Example: length. This property name is a valid variable name, and we know its name in advance, so 
to find the length of an array, you typically write array.length because that is easier to write than array["length"].

objectName.property          // person.age
or

objectName["property"]       // person["age"]
or

objectName[expression]       // x = "age"; person[x]*/

function deepEqual(value1, value2){
	if ((typeof value1 != "object") && (typeof value2 != "object"))
      return value1===value2;
    else if (typeof value1 != typeof value2)
      return false;
    else if (value1==null || value2==null)
      return value1===value2;
  	else {
      for (var item in value1){ // need to remember this is how you go through object properties
      	if (value2[item] == undefined) // this is how you check for a property
          return false;
        else if (deepEqual(value2[item],value1[item]) == false) // send the values in this property
          return false;
      }
      return true;
  	}
}


/*console.log(deepEqual(1,null));
console.log(deepEqual(1,1));
console.log(deepEqual(1,2));
console.log(deepEqual(1,"1"));
console.log(deepEqual(1, "two"));
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(1, obj));
console.log("official tests start here");*/
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
