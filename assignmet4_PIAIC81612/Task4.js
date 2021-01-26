var email = "jehanzaib364@gmial.com";

ValidateEmail(email);

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var after_at = input.search('@');
    if (input.match(validRegex && typeof(after_at) ===String)) {
        alert("Valid email address!");
    } else {
        alert("Invalid email address!");
    }
}