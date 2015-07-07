
//Eloquent Javascript - chapter 4 exercises

/*Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".*/

// Your code here.
var deepEqual = function (valueA, valueB){
  if (valueA==null && valueB==null)
      return true;
    else if (valueA==null || valueB==null)
      return false;
  if (typeof valueA != typeof valueB)
    return false;
  else {
    if (typeof valueA != "object"){
      return valueA === valueB;
    }
    else {
      var countA=0;
      var countB=0;
      for (var property in valueA)
          countA++;
      for (var property in valueB)
          countB++;
      if (countA!=countB)
          return false;
      else {
        for (var property in valueA){
          if (valueB[property]==undefined){
            return false;
          }
          else if (typeof valueB[property] == "object" && typeof valueA[property] == "object"){
      return deepEqual(valueB[property], valueA[property]);
          }
          else if (valueB[property]!=valueA[property])
            return false;
        }
        return true;
      }
    }
  }

}

console.log(deepEqual(2, 2)); // true
console.log(deepEqual(2, 3)); // false
console.log(deepEqual(null, obj)); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual({here: 1, obj: 2}, {here: 1, obj: 2})); // true
console.log("first real tests: ");
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true