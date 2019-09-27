// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function chunkArrayInGroups(arr, size) {
    var newGroup = [];
    var position = 0;
    
    while(position < arr.length) {
    newGroup.push(arr.slice(position, position += size));
    }
    return newGroup;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);