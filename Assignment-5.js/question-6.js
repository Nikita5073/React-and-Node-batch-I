//6.Create a function named addToArray that accepts an array and a new element to add. Each time the function is called, it should return a new array with the new element added at the end, without mutating the original array. Use the spread operator to achieve this.


function addToArray(array, newElement) {
    return [...array, newElement];
}

const initialArray = [1, 2, 3];
const newArray1 = addToArray(initialArray, 4); // [1, 2, 3, 4]
const newArray2 = addToArray(newArray1, 5); // [1, 2, 3, 4, 5]

console.log(newArray1); 
console.log(newArray2); 
console.log(initialArray); 
