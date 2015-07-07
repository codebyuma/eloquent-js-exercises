//Eloquent Javascript - chapter 4 exercises - second attempt

/*The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

/*function range (start, end){
	var result = [];
    for (i=start; i<=end; i++)
    {
      result.push(i);
    }
    return result;
}*/

function range (start, end, step){
	var result = [];
    if (step == undefined)
      step = 1;
  	if (step > 0){
    	for (i=start; i<=end; i+=step)
      		result.push(i);
    }
  	else {
  		for (j=start; j>=end; j+=step) // be careful here. don't use 'i' again'. if it's counting down, need to go until you're >= end. Also, if they're giving a negative number, then you should do +step, as in + (-1)
      		result.push(j);
  	}	
    return result;
}

function sum (inputArray){
	var total =0;
    for (i=0; i<inputArray.length; i++)
      total+=inputArray[i];
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

