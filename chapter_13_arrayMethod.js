// Array Method: .map()

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

const numbers2 = [2, 4, 6, 8, 10];
const fiveBonus = numbers2.map(num => num + 5);
const halves = numbers2.map((num => num / 2));
console.log(fiveBonus);
console.log(halves);

const friends = ["Dinesh", "Dilip", "Debrato", "Koushik", "Sanaj", "Daud", "Santana", "Rupali", "Rokon"];
const arrayLength = friends.map(frind => frind.length); // Each String Length show on the console
const firstLetter = friends.map(frnd => frnd[0]); // String First letter show on the console
console.log(arrayLength);
console.log(firstLetter);

// Array Method: .forEach()

// .forEach() Method প্রতিটি উপদানের উপর কাজ করে কিন্তু কিছু রিটার্ন (return) করে না। অন্যদিকে .map() প্রতিটি উপদানের উপর কাজ করে এবং কিছু রিটার্ন (return) করে। 

const numbers3 = [1, 2, 3, 5, 8, 9, 6]
const result2 = numbers3.forEach(n => n + 10)
console.log(result2)