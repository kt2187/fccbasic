// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    } 
}

//Resources
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
//https://www.w3schools.com/jsref/jsref_slice_string.asp