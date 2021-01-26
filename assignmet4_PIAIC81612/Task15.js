var age = parseInt(prompt("Enter your age please.."));
var date  = new Date();
var Dob = date.getFullYear()-age;
document.writeln("<h1>Your Age is "+ age);
document.writeln("<br><h1>Your Birth year is "+ Dob);