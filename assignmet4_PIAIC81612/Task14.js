var date = new Date();
var reset_date = new Date();
reset_date.setHours(date.getHours()-1);
document.writeln("<h1> Current date: "+ date);
document.writeln("<h1> 1 Hour Ago,it was : "+ reset_date);