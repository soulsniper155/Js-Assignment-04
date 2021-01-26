var verify_pass = prompt("Please Enter Password");
var regex = /[\d|,|.|e|E|\+]+/g;
var first_index_matching = verify_pass[0];

if (verify_pass.length >= 8 && verify_pass.match(regex) && !(first_index_matching > 0) || !(first_index_matching < 9)) {
    document.writeln("Good Password Selection");

} else {
    document.writeln("Enter a valid password. character codes of a-z,A-Z & 0-9")
}