

var aTens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

var aOnes = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var aUnits = "Thousand";
convertnumbertostring();
function convertnumbertostring() {
    var num = prompt('', 'enter the number');
    var j = 6;
    if (num.length < j) {
        var y = ConvertToWords(num);
        alert(y);
    } else {
        alert('Enter the number of 5 letters')
    }
};
function ConvertToHundreds(num) {
    var cNum, nNum;
    var cWords = "";
    if (num > 99) {
        /* Hundreds. */
        cNum = String(num);
        nNum = Number(cNum.charAt(0));
        cWords += aOnes[nNum] + " Hundred";
        num %= 100;
        if (num > 0) {
            cWords += " and "
        }
    }

    if (num > 19) {
        /* Tens. */
        cNum = String(num);
        nNum = Number(cNum.charAt(0));
        cWords += aTens[nNum - 2];
        num %= 10;
        if (num > 0) {
            cWords += "-";
        }
    }
    if (num > 0) {
        /* Ones and teens. */
        nNum = Math.floor(num);
        cWords += aOnes[nNum];
    }
    return (cWords);

}
function ConvertToWords(num) {
    var cWords;
    for (var i = 0; num > 0; i++) {
        if (num % 1000 > 0) {
            if (i != 0) {
                cWords = ConvertToHundreds(num) + " " + aUnits + " " + cWords;
            } else {
                cWords = ConvertToHundreds(num) + " ";
            }
        }
        num = (num / 1000);
    }
    return (cWords);
}