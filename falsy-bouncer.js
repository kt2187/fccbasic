function bouncer(array) {
    let testArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i])testArray.push(array[i])
    }
    return testArray;
}

bouncer([7, "ate", "", false, 9]);