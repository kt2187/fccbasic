// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function repeatStringNumTimes(string, number) {
    var repeatedString = "";
    while (number > 0) {
        repeatedString += string;
        number --;
    }
    return repeatedString;
}

repeatStringNumTimes("abc", 3);