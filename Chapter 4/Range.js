
//Eloquent Javascript - chapter 4 exercises
/*Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/
// need to add this: It might also be worthwhile to use a different default step, namely, -1, when the end of the range is smaller than the star

var range = function (start, end, step){
	var numRange =[];
  	if (isNaN(step) || step ==0){
  		for (i=start; i<=end; i++)
  			numRange.push(i);
  	}
  	else {
      if (step>0){
  		for (i=start; i<=end; i=i+step)
      		numRange.push(i);
      }
      else{
        for (i=start; i>=end; i=i+step){
          numRange.push(i);
        }
      }
    }
  	return numRange;
}

var sum = function (numArray){
	var total = 0;
  	for (i=0; i<numArray.length; i++){
  		total+=numArray[i];
    }
  	return total;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(1,10));
console.log(range(5,7,0));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
