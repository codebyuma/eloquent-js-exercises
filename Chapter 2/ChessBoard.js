//Eloquent Javascript - chapter 2 exercises
/*Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/


var size = 8;
var chessBoard="";
var odd=false;
for (i=0; i<size; i++){
  for (j=0; j<size; j++){
    if (odd){
        if (j%2==0)
      		chessBoard+="#";
   	 	else
      		chessBoard+=" ";
    }
    else {
    	if (j%2==0)
      		chessBoard+=" ";
   	 	else
      		chessBoard+="#";
    }
  }
  chessBoard+="\n";
  if (odd) odd=false;
  else odd = true;
}
console.log(chessBoard);