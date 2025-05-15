
// let : variable name no change but value is changeable 

let age = 36;
age = 35;
// console.log(age)

let pocketMoney = 500;
pocketMoney = 150;
// console.log(pocketMoney)

let studyTimeE = 6;
studyTimeE = 4;
// console.log(studyTimeE)

let friendCount = 41;
friendCount= 38;
// console.log(friendCount)

let myPhone = 25000;
myPhone = 12000;
// console.log(myPhone)

let chairsCount = 40;
chairsCount = 38;
chairsCount = 32;
// console.log(chairsCount)

let playTime = 3;
playTime = 0;
// console.log(playTime)


// comment: When a programmer is usedTo in Comment. It's help to understanding Code fully. It's a Very Good Habit.

let score = 210;
// console.log(score)

// here, score is not defined clearly. So this program is not full fill. Thats why inThisCase needs a comment
// T20 Match targeted Score BD VS IND


const radius = 360
// console.log(radius)

// A radius is a measure of distance from the center of any circular object to its outermost edge or boundary. 
// A radius is not only a dimension of a circle but also for a sphere, semi-sphere, a cone with a circular base,
// a cylinder having circular bases.

let dress = 7;
console.log(dress)

/*
I have many favorite shirt, white shirt, sky blue
Ash color etc.
My most favorite shirt is any one color shirt.
*/

let giftMoney = 100;
console.log(giftMoney)

// This gift was given me by my father as a good kid.

let studyTime = 7;
console.log(studyTime)

// 1st 2 hours for math
// 2nd 2 hours english
// 3rd 3 hours coding and others

let sendMoney = 12500;
console.log(sendMoney)

// mobile phone price 12000
// service fee = 250
// vendor = 250

const pay = 724;
console.log(pay)

// I was order a bengali coding book by rokomari.com
// This book name is Marhaba, JavaScript Maro thaba by Jhankor Mahabub. 
// It's a very special to me when i received this book by redex courier.
// Here, Book Price is 671, Delivery fee 53.


let favFood = "Dal Rice"
// console.log(favFood)

let city = "Dhaka"
let City = "Khulna"
// console.log(city)
// console.log(City)

// SyntaxError means this is reserved key words
// let super = "21"
// console.log(super)

// SyntaxError means this is reserved key words
// let class = 8
// console.log(class)

// SyntaxError: Invalid or unexpected token // At first, number is not a variable name
// let 2ndPossition = "Pratim Mondal"
// console.log(2ndPossition)


// parseInt parseFloat practice

const sugar = '30'
console.log(parseInt('30'))

const age3 = parseInt('36')
// console.log(age3)

const fatherAge = '61'
const fatherAgeNumber = parseInt(fatherAge);
// console.log(fatherAgeNumber)

const input = 'x20'
const num1 = parseInt(input)
// console.log(num1)

const age4 = parseInt('djkfjdfk')
const weight = parseInt('ten')
// console.log(age4, weight)

const age5 = parseInt('36f');
const wight2 = parseInt('9twenty');
const address = parseInt ('tom60')
// console.log(age5, wight2, address)

const age6 = parseInt('36.33333')
// console.log(age6)

const age7 = parseFloat('36.3333333')
// console.log(age7)
// console.log(age7.toFixed(2))

const firstNum = 12.36251;
const secondNum = 13.54646;
const totalNum = firstNum + secondNum;
// console.log(totalNum.toFixed(3))

// Exercise 

const str = '20'
// console.log(parseInt(str) + 10) // str convert to number and addition 10

const modulus = 3.11542
// console.log(parseInt(modulus)) // ParseInt

const str2 = 'premikBoy'
console.log(parseInt(str2)) // NaN

const num = 8.2361;
const num2 = 4.2135;
const sumNum = num + num2;
console.log(sumNum.toFixed(2)) // Only decimal 2

const num3 = 10.5678;
const num4 = 5.4321;
console.log((num3 + num4).toFixed(1))

const num5 = '42.45689754'
console.log(parseFloat(num5).toFixed(3)) // decimal 3 
