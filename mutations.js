// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function mutation(arr) {
    //Loop through all the letters in the second element
    for (var i = 0; i < arr[1].length; i++) {
      //Test if letter is in the first element
      //indexOf returns the index of an element in an array or -1 if the element isn't        in the array
      //Use toLowerCase method to ensure strings are same case
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase) === -1) {
        return false;
    }
    }
    return true;
}

mutation(["hello", "hey"]);