//Eloquent Javascript - chapter 2 exercises
/*Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######   */

var count=1;
var toPrint=""
for (i=0; i<=7; i++){
	for (j=0; j<count; j++)
      toPrint=toPrint+"#";
    console.log(toPrint);
  	toPrint="";
  	count++;
}
