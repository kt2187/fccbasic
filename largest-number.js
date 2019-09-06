// Basic Algorithm Scripting: Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function largestOfFour(arr) {
    var largestNumbers = [];
    for (var i = 0; i<arr.length; i++){
        var maximum = Math.max.apply(Math, arr[i]);
        largestNumbers.push(maximum);
    }
    return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Research used to solve problem

//How Math.max & Math.max.apply() works
//https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work
//https://stackoverflow.com/questions/44751817/math-max-returns-null-on-variables

//How can I pass the elements of an array as arguments to a function?
//https://stackoverflow.com/questions/2856059/passing-an-array-as-a-function-parameter-in-javascript

//Context
//http://ryanmorr.com/understanding-scope-and-context-in-javascript/

//Spread Operator
//https://codeburst.io/javascript-the-spread-operator-a867a71668ca

//How to find min, max, sum, & average values in arrays
//https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332

//overview
//https://www.vincecampanale.com/blog/2016/12/12/return-largest-numbers-in-arrays/