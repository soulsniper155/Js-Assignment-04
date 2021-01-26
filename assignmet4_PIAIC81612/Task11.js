var inp = prompt("Enter Values");
var sum = 0 ;
var len_of_inp = inp.length;
for(var i=0;i<inp.length;i++){
    sum = sum + Number(inp[i]);

}
document.writeln("Value :"+inp + " Mean is: "+sum/len_of_inp);