//Eloquent Javascript - chapter 3 exercises
/*Write a function min that takes two arguments and returns their minimum.*/

var min = function (x, y){
	if (x<y)
      return x;
  	else
      return y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

