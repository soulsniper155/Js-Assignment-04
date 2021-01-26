var Str  = "The quick brown fox jumps over the lazy dog".toLowerCase();
var count = (Str.match(/the/g) || []).length;
document.writeln("<h1>Text: "+Str);
document.writeln("<br><h1>There are "+count+" occurrence(s) of word \'the\'");


