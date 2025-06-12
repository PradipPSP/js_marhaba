
// Using One Parameter/ arguments


function doubleIt(numbers){
    const doubled = numbers * 2;
    // console.log(doubled);
};
doubleIt(9);
doubleIt(81);
doubleIt(25);


function square (number){
    const borGo = number * number;
    // console.log('Square of', number, 'is:', borGo);
};
square(9);
square(81);
square(25);


// Using Two parameter/ Arguments

function add (num1, num2){
    const sum = num1 + num2;
    // console.log(sum);
};
add(15, 25);

function addAll(a, b, c, d, e){
    const total = a + b + c + d + e;
    // console.log(total);
};
addAll(15, 10, 15, 10, 25);


// function declear করে পরে variable এর মাধ্যমে agruments pass করা

function difference (x, y){
    const diff = x - y;
    // console.log(x, y, 'difference is', diff);
};
const fatherAge = 65;
const motherAge = 55;
difference(fatherAge, motherAge);


// parameter নিয়ে arguments

/* function addNumbers (a, b){
    return a + b;;
};
const result = addNumbers(5, 8, 10, 15, 20);
console.log(result); // 13 
*/

// অর্থাৎ এখানে প্রথম ২ টি আর্গুমেন্টস এর যোগফল বের করে দিচ্ছে এবং বাকিগুলি ইগনোর করছে। সবগুলি পেতে হলে ফাংশনের ভিতরে একটি চমৎকার জিনিস আছে, সেটাকে বলে arguments, আর কোনো ফাংশনের ভিতরে arguments কে কনসোল লগ করলে সেই ফাংশন কল করার সময় যত প্যারামিটার দেয়া হইছে, সব পেয়ে চাবি।

/* function addNumbers (a, b){
    console.log(arguments);
    return a + b;;
};
const result = addNumbers(5, 8, 10, 15, 20);
console.log(result); // [Arguments] { '0': 5, '1': 8, '2': 10, '3': 15, '4': 20 } 13
*/

// এই arguments জিনিসটা অ্যারের মতো দখতে হলেও এটা কিন্তু কোন অ্যারে না; বরং এটাকে বলে অ্যারের মত দেখতে অবজেক্ট (array like object). তবে এই arguments এর উপর লুপ চালিয়ে যে কোন কাজ করা যায়।
 
function addNumbers (a, b){
    let sum = 0;
    for(const num of arguments){
        sum +=num;
    }
    // console.log(sum);
};
addNumbers(5, 8, 10, 15, 20);


// মনে রাখবি, ফাংশনে চাইলে একা বা একাধিক প্যারামিটার পাঠানো যায় এবং প্যারামিটারের মান পরিবর্তন করে একই ফাংশনকে বার বার ব্যবহার করা যায়।


// Practice


function fatherSon (m, n){
    const sum = m + n;
    // console.log('The total age of', m, '&', n, 'is:', sum);
};
const fatherAgee = 50;
const sonAge = 15;
fatherSon(fatherAgee, sonAge);


function calculator (a, b){
    const multiplication = a * b;
    // console.log(multiplication);
};
calculator(20, 15);

function subjectMark (a, b, c){
    const totalMark = a + b + c;
    console.log(totalMark);
};
// subjectMark(45, 65, 80);


function myAge (a, b){
    const age = a - b;
    // console.log('My Age is', age, 'year.');
};
const currentYear = 2025;
const birthYear = 1991;
myAge(currentYear, birthYear);


function bazar (a, b){
    const pice = a / b;
    // console.log('You can buy', pice, 'pice only');
};
const totalTaka = 105;
const currentPrice = 35;
bazar(totalTaka, currentPrice);


function average (a, b, c, d){
    const averageNumber = (a + b + c + d) / 4;
    // console.log('The Average Number is', averageNumber);
};
// average(10, 20, 30, 40);

let $1stNum = 10;
let $2ndNum = 20;
let $3rdNum = 30;
let $4thNum = 40;
average($1stNum, $2ndNum, $3rdNum, $4thNum);


function salesPrice (costPrice){
    const profit = 250;
    const sellingPrice = costPrice + profit;
    return sellingPrice
};
// console.log(salesPrice(630)); // 880


function toBeHundredYear (birthYear){
    const year = 100;
    const hundredYear = birthYear + year;
    return hundredYear;
};
// console.log(toBeHundredYear(1991));


function phoneTime (parDay){
    const month = parDay * 30;
    return month;
};
// console.log('Using Phone Time', phoneTime(5), 'hours.');