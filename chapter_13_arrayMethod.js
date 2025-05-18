// Array Method:

// syntax: array.map((element, index, array) =>{/*    */})
Parameters:
// 01. element: It is a required parameter and holds the current element's value.
// 02. index: It is an optional parameter and it hold's the index of the current element.
// 03. array: It is an optional parameter and it holds the array

// Return Value: It's return a new array and the array's elements result from th callback function.

// const numbers = [2, 4, 6, 8, 10, 12, 15, 20, 30]

function doubleAll (numbers){
    const doubled = [];
        for(const num of numbers){
            const value = num * 2;
        doubled.push(value)
        }
    return doubled
};
console.log(doubleAll(numbers))

// In Array Functions

const numbers = [2, 4, 6, 8, 10, 12, 15, 20, 30]

const doubleNum = numbers.map(num => num * 2);
console.log(doubleNum)

const numbers2 = [2, 4, 6, 8, 10]
const squr