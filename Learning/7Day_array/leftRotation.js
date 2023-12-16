/*
Implement a function that returns an updated array with 1 left rotation on an array of integers

rotateLeft([1,2,3,4]) // returns [2,3,4,1]

*/ 


function rotateLeft(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // Perform left rotation
    const firstElement = arr.shift();
    arr.push(firstElement); 
    return arr;
}

// Example usage:
let originalArray = [1, 2, 3, 4];
let rotatedArray = rotateLeft(originalArray);
console.log(rotatedArray);
