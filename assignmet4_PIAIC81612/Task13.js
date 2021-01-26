var today = new Date();
var oldDate = new Date("Jan 1, 1970");
var diff = today - oldDate;
document.writeln("Current Date : "+ today);
document.writeln("<br>Elapsed Millisecond since January 1,1970 : "+ diff / ( 60 * 60 * 24));
document.writeln("<br>Elapsed minutes since January 1,1970 : "+ diff / (1000* 60 * 60 * 24));