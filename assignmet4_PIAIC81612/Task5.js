var user_input = prompt("Please Enter Positive Number");
if(user_input > 0){
    document.writeln("<h1>Numebr: "+user_input);
    document.writeln("<br><h1> Round off: " + Math.round(user_input));
    document.writeln("<br><h1> Floor Value: " + Math.floor(user_input));
    document.writeln("<br><h1> Ceil Value: " + Math.ceil(user_input));
}else{
    document.write("Please Enter Positive Numbers...")
}
