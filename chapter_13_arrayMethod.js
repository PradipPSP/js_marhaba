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

// const numbers = [2, 4, 6, 8, 10, 12, 15, 20, 30]

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


let numbers = [30, 10, 50, 20, 70, 60, 40];

// Ascending 

let ascending = [...numbers].sort((a, b)=> a - b);
console.log("Ascending Num: ", ascending)

// Descending 

let descending = [...numbers].sort((a, b) => b - a);
console.log("Descending Num :", descending);

// sortByName students array

const students2 = [
    {name: "Pratim", age: 3.4, marks: 85},
    {name: "Suchitra", age: 31, marks: 75},
    {name: "Sandeep", age: 37, marks:40},
    {name: "Rajdeep", age: 30, marks: 80},
    {name: "Pradip", age: 36, marks:65},
    {name: "Sujan", age: 32, marks: 55},
    {name: "Mrinal", age: 33, marks:35},
    {name: "Bishojit", age: 34, marks:34}
];

let sortByName = [...students2].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName);

let totalMarks = students2.reduce((total, students2) => total + students2.marks, 0)
console.log("Total Marks of the Students =", totalMarks);

let averageMarks = parseInt(totalMarks / students2.length)
console.log("Average Marks : ", averageMarks)


let numS = [5, 10, 15, 20];
let sumNumS = numS.reduce((total, current)=> total + current, 0);
console.log(sumNumS)

let num2 = [3, 88, 2, 99, 42];
// let maxNum = Math.max(...num2)
let maxNum2 = num2.reduce((max, curr)=> curr > max ? curr : max)
console.log(maxNum2)

let num3 = [3, 88, 2, 99, 42];
// let minNum2 = Math.min(...num3)
let minNum3 = num3.reduce((min, curr) => min < curr ? min : curr)
console.log(minNum3)


// Find topScorer with marks

const subjectNumber = [
    {subject: "Bengli", name: "Pratim", marks: 85},
    {subject: "English", name: "Pradip", marks: 75}
];

let topScorer = subjectNumber[0];

for (let i = 1; i < subjectNumber.length; i++) {
  if (subjectNumber[i].marks > topScorer.marks) {
    topScorer = subjectNumber[i];
  }
}
console.log(`${topScorer.name} with ${topScorer.marks} marks`);

// Another Solution

const subjectNumber2 = [
    {subject: "Bengli", name: "Pratim", marks: 85},
    {subject: "English", name: "Pradip", marks: 75}
];

let topScorer2 = subjectNumber2.reduce((top, current) =>
  current.marks > top.marks ? current : top
);

console.log(`${topScorer2.name} with ${topScorer2.marks} marks`);


const snacksPrice = [30, 45, 20, 60, 10]
const updatePrice = snacksPrice.map(snack => snack + 13);
console.log(updatePrice); // [43, 58, 33, 73, 23]

const playerList = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo", "Neymar"]
const updateList = playerList.filter(player => player.length > 5)
console.log(updateList); // ["Maradona", "Zidane", "Ronaldo", "Neymar"]

const numbers4 = [10, 15, 20, 25, 30, 35, 40]
const firstTwentyNum = numbers4.find(num => num > 20);
console.log(firstTwentyNum); // [25]

const height = [65, 70, 68, 72, 68, 73]
const heightUpTo69 = height.filter(height => height > 69)
console.log(heightUpTo69); // [70, 72, 73]

const numbers5 = [10, 15, 20, 25, 30, 35, 40]
// const dividedByThree = numbers5.map(num => parseInt(num / 3));
const dividedByThree = numbers5.map(num => parseFloat(num /3))
console.log(dividedByThree);

const newFriendList = ["Leonardo", "Brad Pitt", "Kate Winslet", "Audrey Hepburn", "Johnny Depp"];
const thirdLetter = [newFriendList.map(frind => frind[3])]
console.log(thirdLetter); // ["n", "d", "e", "r", "n"]

const nameList = ["Tom", "Harry", "Sam", "Jack"]
const findNameH = nameList.find(name => name.toLowerCase().startsWith("h"));
console.log(findNameH); // ["Harry"]


const nameList2 = ["Pradim", "Pradip", "Pranesh", "Sujan", "Suchi", "Nitai"]
const findNameH2 = nameList2.filter(name => name.toLowerCase().startsWith("p"));
console.log(findNameH2); // ["Pradim", "Pradip", "Pranesh"]

const array = [1, 2, 3, 4, 5, 6]
const result = array.forEach(n => console.log(n))
console.log(result)

const animals = ['cow', 'goat', 'duck', 'horse', 'hen']
const print = animals.forEach(ele => console.log(ele))

const nested = [1, 2, [3, 4,[5, 6]]];
const flattened = nested.flat(2); // যেহেতু মূল এ্যারের ভিতরে ২ টি নেস্টেড এ্যারে আছে এ জন্য .flat(2) লেখা। অর্থাৎ এখানে যে কয়টি নেস্টেড এ্যারের থাকবে সে কয়টি সংখ্যা দিতে হবে। 
console.log(flattened);

// some() every()

// some() if one condition is true then result is true otherwise false
// every() all condition is true then result is true otherwise false

const numbers6 = [80, 90, 100, 110, 130, 150]
const checkUpTo100 = numbers6.some(num => num >= 100);
console.log(checkUpTo100); // true

const numbers7 = [10, 20, 25, 35, 50, 50]
const dividedByFive = numbers7.every(num => num % 5 === 0);
console.log(dividedByFive); // true

const words = ["hello", "World", "JSON", "then"]
const oneWord = words.some(word => word == 'hello');
console.log(oneWord);

const ages = [18, 11, 15, 25]
const upTo18 = ages.every(age => age >= 18)
console.log(upTo18); // false

// Summary 

// some চেক করে, অ্যারের অন্তত একটি আইটেম শর্ত পূরণ করে কি না। যদি করে, তাহলে true, অন্যথায় মিথ্যা।

// every চেক করে, অ্যারের সব আইটেম শর্ত পূরণ করে কি না। যদি করে, তাহলে true, না করলে false।


// reduce() কমিয়ে ফেলা

const numbers8 = [4, 6, 10, 15, 25, 45, 50];
let sum = 0; // here, 0 is initial Value
for(const num of numbers8){
  sum = sum + num // here, initial value (০) এর সাথে প্রত্যেক বার num যোগ হয়ে আবার initial value হচ্ছে আবার num যোগ হচ্ছে। এভাবে লুপ টি চলছে।
};
console.log(sum)

// syntax: arrayName.reduce(callBackFunction, initialValue);
// এখানে, অ্যারের নামের পরে ডট চিহ্ন দিয়ে reduce লিখবি, তারপর দুইটি জিনিস লাগবে। একটি কলব্যাক ফাংশন, আর একটি হচ্ছে প্রাথমিক মান বা ইনিশিয়াল ভ্যালু। 

for(const num of numbers8){
  sum = sum + num
}; // here, initial value (০) এর সাথে প্রত্যেক বার num যোগ হয়ে আবার initial value হচ্ছে আবার num যোগ হচ্ছে। এভাবে লুপ টি চলছে। এটাকে একটু গুছিয়ে বললে:

// (accumulator, currentValue) => doSomeWork বা উদাহরণের সাথে মিলিয়ে বললে বলা যায়----
// (accumulator, currentValue) => accumulator + currentValue

const total = numbers8.reduce((sum, num) => sum + num, 0);
console.log(total); // 155

const total2 =numbers8.reduce((p, c) => p + c, 0);
console.log(total2) // 155

// map, forEach, filter, find, reduce methor practice

const products = [
  {id : 1, name: 'hp', price : 75000},
  {id : 2, name: 'dell', price : 65000},
  {id : 3, name: 'lenovo', price : 70000},
  {id : 4, name: 'mac', price : 95000}
];

const names = products.map(element => element.name);
// console.log(names) // products name print 

const priceUpToFifty = products.filter(product => product.price > 50000);
// console.log(priceUpToFifty); // upto 50000 

const priceLessThenEightyK = products.filter(product => product.price < 80000);
// console.log(priceLessThenEightyK); // 

const totalPrice = products.reduce((accumolator, current) => accumolator + current.price, 0);
console.log(totalPrice) // 305000

// Practice Reduce() Method

const numArray = [5, 10, 15, 50, 25, 30, 40]
const sumOfArray = numArray.reduce((accumolator, current) => accumolator + current, 0);
console.log(sumOfArray); // 175

const myProducts = [
  {name: 'shampoo', price: 100},
  {name: 'toothpaste', price: 120},
  {name: 'soap', price: 70},
  {name: 'rice', price: 2500}
];
const productPrice = myProducts.reduce((total, current) => total + current.price, 0);
console.log(productPrice); // 2790

const educationStationary = [
  {name: 'Book', price: 1500},
  {name: 'Pen', price: 110},
  {name: 'Bag', price: 650}
];
const totalPricee = educationStationary.reduce((education, stationary) => education + stationary.price, 0);
console.log(totalPricee); // 2260













