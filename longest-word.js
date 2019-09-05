// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function findLongestWordLength(str) {
    var strSplit = str.split(" ");
    var longestWord = 0;
    for (var i =0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
        longestWord = strSplit[i].length;
    }
    }
    return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

