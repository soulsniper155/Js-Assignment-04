var rightNow = new Date();

if (Number(rightNow.getDate()) < 16) {
    console.log(rightNow.getDate());
    document.write("<h1>First fifteen days fo the month");
} else {
    document.write("<h1>Last days fo the month");
}
