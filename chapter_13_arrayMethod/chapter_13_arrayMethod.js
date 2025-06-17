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
// console.log(sumOfArray); // 175

const myProducts = [
  {name: 'shampoo', price: 100},
  {name: 'toothpaste', price: 120},
  {name: 'soap', price: 70},
  {name: 'rice', price: 2500}
];
const productPrice = myProducts.reduce((total, current) => total + current.price, 0);
// console.log(productPrice); // 2790

const educationStationary = [
  {name: 'Book', price: 1500},
  {name: 'Pen', price: 110},
  {name: 'Bag', price: 650}
];
const totalPricee = educationStationary.reduce((education, stationary) => education + stationary.price, 0);
// console.log(totalPricee); // 2260

const arrayNumbers = [1, 2, 3, 4, 5]
const multiplication = arrayNumbers.reduce((multi, array) => multi * array, 1); // এখানে কলব্যাক ফাংশন এর সাথে অ্যারে সংখ্যা গুণ করা হয়েছে, যার ইনিশিয়াল ভ্যালু হচ্ছে ১।
// console.log(multiplication);

const arrNumbers = [10, 20, 30, 40, 50, 80, 90]
const maXNumber = arrNumbers.reduce(( max, arr) => max > arr ? max : arr, 1);
// console.log(maXNumber); // 90

const arrNumberss = [10, 20, 30, 40, 50, 80, 90]
const maXNumberr = arrNumberss.reduce(( max, arr) => max > arr ? max : arr);
// console.log(maXNumberr); // 90

const arrNumbers2 = [10, 20, 30, 40, 50, 80, 90]
const sumation = arrNumbers2.reduce((sum, array) => sum + array, 50);
console.log(sumation) // 370, here array num sumation is 320 and initial value is 50, so total 370.


// চট করে sort কর

const friendsName = ['Bob', 'Anna', 'Chris', 'Daddy'];
friendsName.sort();
// console.log(friendsName); // ['Anna', 'Bob', 'Chris', 'Daddy', 'Zara']

const numaric = [9, 6, 8, 5, 3, 1, 7, 2, 4]
numaric.sort();
// console.log(numaric); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ৯ পর্যন্ত সংখ্যাকে উপরোক্তভাবে সট করা গেলেও যখন দুই সংখ্যা হবে তখন আর numaric.sort() এ ফাংশন টি কাজ করবে না। কারণ sort() সংখ্যাকেও স্ট্রিং হিসাবে গণনা করে।

// সমাধান ঃ .sort() এই ব্রাকেট এর ভিতরে একটি কলব্যাক ফাংশন দিতে হবে। যেহেতু এটি অ্যারের উপদানগুলোকে তুলনা করে তাই এই কলব্যাক ফাংশনকে বলে  কম্পেয়ার ফাংশন (compare funcation). 

// এই কম্পেয়ার ফাংশনে ২ টি প্যারামিটার থাকবে। তুই যে কোন নাম দিতে পারবি। যেমনঃ (a, b) => a - b

const numaric2 = [17, 25, 11, 51, 81, 45, 7];
numaric2.sort((a, b) => a - b);
// console.log(numaric2); // [7, 11, 17, 25, 45, 51, 81]

// ব্যাখ্যাঃ a - b 

// ০১. হতে পারে a - b এর মান পজিটিভ সংখ্যা অর্থাৎ বি ছোট, এ বড়। সেক্ষেত্রে বি আগে এবং এ পরে বসবে।

// ০২. হতে পারে a - b এর মান নেগেটিভ সংখ্যা অর্থাৎ বি বড়, এ ছোট। সেক্ষেত্রে এ আগে এবং বি পরে বসবে।

// ০৩. হতে পারে a - b এর মান সমান অর্থাৎ কেউ বড় বা ছোট নয়। সেক্ষেত্রে এ'র জায়গায় এ এবং বি'র জায়গায় বি বসবে।

// বড় হতে ছোট সাজানো ঃ (a, b) => b - a

const numaric3 = [59, 69, 39, 29, 99, 19, 89, 49, 39, 9, 79];
numaric3.sort((a, b) => b - a);
// console.log(numaric3); // [99, 89, 79, 69, 59, 49, 39, 39, 29, 19, 9]


// object সাজানো

const offCollegueList = [
  { name: 'Moynul', age: 30},
  { name: 'Nayon', age: 28},
  { name: 'Morirul', age: 29},
  { name: 'Bishonath', age: 55},
  { name: 'Jaggatbrato', age: 57},
  { name: 'Subrata', age: 34},
  { name: 'Provash', age: 44},
  { name: 'Ankur', age: 21},
  { name: 'Bipul', age: 49},
  { name: 'Pratim', age: 3.6}
];
// offCollegueList.sort((a, b) => a.age - b.age);
// offCollegueList.sort((a, b)=> a.name.localeCompare(b.name));
// console.log(offCollegueList);

const friends5 = [
  { name: 'Zara', age: 25},
  { name: 'Bob', age: 20},
  { name: 'Anna', age: 30}
];
// friends5.sort((a, b) => a.age - b.age);
// console.log(friends5);


// Practice sort()

const numaric4 = [50, 12, 25, 8, 15];
numaric4.sort((a, b) => a - b);
// console.log(numaric4); // [8, 12, 15, 25, 50]

const numaric5 = [50, 12, 25, 8, 15];
numaric5.sort((a, b) => b - a);
// console.log(numaric5); // [50, 25, 15, 12, 8]

const agess = [
  {name: 'Ali', age: 29},
  {name: 'Jara', age: 22},
  {name: 'Tariq', age: 35}
];
// agess.sort((a, b) => a.age - b.age);
// console.log(agess);

const fNames = ['Pratim', 'Raju', 'Pradip', 'Suchitra', 'Animesh', 'Bishojit', 'Zara', 'Chanchal']
// fNames.sort();
// console.log(fNames); // ["Animesh", "Bishojit", "Chanchal", "Pradip", "Pratim", "Raju", "Suchitra", "Zara"]


// উল্টপথের reverse()

const colleagueNames = ['Pratim', 'Raju', 'Pradip', 'Suchitra', 'Animesh', 'Bishojit', 'Zara', 'Chanchal']
// colleagueNames.reverse();
// console.log(colleagueNames); // ["Chanchal", "Zara", "Bishojit", "Animesh", "Suchitra", "Pradip", "Raju", "Pratim"]

const numaric6 = [50, 12, 25, 8, 15];
// numaric6.reverse()
// console.log(numaric6); // [15, 8, 25, 12, 50]

// Practice

const users = [
  { name: 'Moynul', age: 30},
  { name: 'Nayon', age: 28},
  { name: 'Morirul', age: 29},
  { name: 'Bishonath', age: 55},
  { name: 'Jaggatbrato', age: 57},
  { name: 'Subrata', age: 34},
  { name: 'Provash', age: 44},
  { name: 'Ankur', age: 21},
  { name: 'Bipul', age: 49},
  { name: 'Pratim', age: 3.6}
];
users.reverse();
//console.log(users);

// নাইস নাইস slice splice

// তোর কাছে একটা পিজ্জা আছে, যার প্রতিটা স্লাইসকে তুই আলাদা আলাদাভাবে চিহ্নিত করতে পারিস। এখন তুই ঠিক করলি, মাঝের কয়েকটা স্লাইস আলাদা করে রাখবি। slice() ঠিক এই কাজটাই করে। এটা কোনো অ্যারের নির্দিষ্ট অংশকে কেটে আলাদা করে ফেলে, কিন্তু মূল অ্যারেকে বদলায় না।

// স্লাইসের মধ্যে সাধারণত ২টা প্যারামিটার থাকে। প্রথম প্যারামিটার হচ্ছে, কোন ইনডেক্স থেকে কাটা শুরু করবে, আর কোন ইনডেক্সের আগ পর্যন্ত কাটতে চাস।
 
const pizzaSlices = ['Bread', 'Cheese', 'Veggie', 'BBQ', 'Meet'];
const selectedSlices = pizzaSlices.slice(1, 4); // অর্থ হচ্ছে ১নং ইনডেক্স থেকে ৩নং ইনডেক্স পর্যন্ত নতুন অ্যারেতে দেখাবে। অর্থাৎ ইনডেক্স নং ০ এবং ইনডেক্স নং ৪ কাটা যাবে।
// console.log(selectedSlices); // ["Cheese", "Veggie", "BBQ"]
// console.log(pizzaSlices); 

// একটি প্যারামিটার ও ব্যবহার করা যাবে

const selectedSlices2 = pizzaSlices.slice(2); // অর্থ হচ্ছে, দুই নং ইনডেক্স থেকে শুরু হয়ে শেষ অ্যারে পর্যন্ত দেখাবে
console.log(selectedSlices2); // ["Veggie", "BBQ", "Meet"]

// যদি কোন প্যারামিটার না দেওয়া হয়, তাহলে পুরো অ্যারেটাই কপি হয়ে যাবে। 
const fullPizza = pizzaSlices.slice();
console.log(fullPizza);


// Splice 

// splice : স্লাইস থেকে তুই উপাদান বের করতে পারবি, তবে সে অ্যারেকে চেইঞ্জ করে না। অন্যদিকে splice মূল অ্যারেকে বদলে ফেলে। প্লাস এইটা দিয়ে অ্যারে থেকে আইটেম মুছে ফেলতে বা রিমুভ করতে পারবি। এমনকি অ্যারের যেকোনো জায়গায় (এমনকি শুরু, শেষ বা মাঝখানে) নতুন উপাদান যোগ করতে পারবি।

// ধর, তোর কাছে একটা সিনেমার লিস্ট আছে। তুই ঠিক করলি, মাঝখান থেকে একটা সিনেমা বাদ দিবি, আর তার জায়গায় নতুন সিনেমা ঢোকাবি।

// spcile এ সাধারণত ২টা প্যারামিটার দেয়। প্রথম প্যারামিটার দিয়ে বোঝায়, কোন ইনডেক্স থেকে শুরু করবে। আর সেকেন্ড প্যারামিটার দিয়ে বোঝায়, তুই কয়টা উপাদান ডিলিট করতে চাস।

// প্লাস আরেকটা জিনিস মনে রাখবি, splice কিন্তু যে অ্যারের ওপরে অ্যাপ্লাই করবি, সে সেই অ্যারেকে চেইঞ্জ করে ফেলবে, আর যে যে উপাদান রিমুভকরবে, তাদেরকে রিটার্ন করবে।

// নিচের অ্যারের মধ্যে আমরা splice করছি 2 ইনডেক্স থেকে, তারপর ৩ টা উপাদান রিমুভ করে ফেলছি। আবার পরের লাইনে movies-কে কনসোল লগ করে দেখছি, movies-এর মধ্যে উপাদানগুলো সরে গেছে। অর্থাৎ অরিজিনাল আরে কিন্তু চেইঞ্জ হয়ে গেছে।

// const moviess = ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It'];
// const removed = moviess.splice(2, 3);
// console.log(removed); // ['Alien', 'Avatar', 'Coco']
// console.log(moviess); 

// এই কোডের ব্যাখ্যা বাংলায়:

// moviess নামের একটি অ্যারে আছে, যেখানে কয়েকটি সিনেমার নাম আছে: ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It']

// splice(2, 3) মানে হলো:

    // 2 হলো সূচক (index), যেখান থেকে উপাদান সরানো শুরু হবে। এখানে সূচক ২ মানে তৃতীয় উপাদান, অর্থাৎ 'Alien'

    // 3 হলো মোট কতটি উপাদান সরাতে হবে। এখানে ৩টি উপাদান সরানো হবে: 'Alien', 'Avatar', এবং 'Coco'

   // removed ভ্যারিয়েবলে এই তিনটি সরানো উপাদান সংরক্ষিত হবে

    // console.log(removed); কমান্ডটি সেই সরানো উপাদানগুলো কনসোলে দেখাবে

// আউটপুট হবে:

// ['Alien', 'Avatar', 'Coco']

// অর্থাৎ, moviess অ্যারে থেকে 'Alien', 'Avatar', ও 'Coco' সরিয়ে ফেলা হয়েছে এবং সেগুলো removed অ্যারেতে রয়েছে।

const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const deleted = numbers9.splice(4, 4, 11, 13)
console.log(deleted); // এখানে ইনডেক্স নম্বর ৪ হতে কাটা শুরু হয়েছে এবং ৪ নম্বর ইনডেক্সসহ ৪ টি ইনডেক্স কাটা হয়েছে যা ডিলিটেড অ্যারেতে সংরক্ষণ করা হয়েছে। তারপর ১১ ও ১৩ নম্বর ভ্যালু এ্যাড করা হয়েছে মুল এ্যারেতে।
console.log(numbers9);


// Practice slice() splice()

const fruits =['Apple', 'Banana', 'Cherry', 'Date'];
const sliceFruits = fruits.slice(1, 3);
console.log(sliceFruits); // ["Banana", "Cherry"]

const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const newCars = cars.slice(0, 2);
console.log(newCars); // ["Tesla", "BMW"]

const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
const deletedMovieList = movieList.splice(2, 2, 'Batman', 'Superman')
console.log(deletedMovieList); // ["Joker", "Avatar"]
console.log(movieList) // ["Inception", "Titanic", "Batman", "Superman", "Interstellar"]

const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const deletedPlayers = players.splice(2, 1, 'Halland');
console.log(players); // ["Messi", "Ronaldo", "Halland", "Mbappe"]


// .includes()

function filteredArray (arr, elem){
    let newArr = [];
    for (let i = 0; i <arr.length; i++){
        if(!arr[i].includes(elem)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
console.log(filteredArray([[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]], 3));
