
function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    return sum;
};
const num = [12, 45, 6, 8, 14];
const total = sumOfNumbers(num);
// console.log('Sum of Numbers =', total);


function sumOfEvenNumber (numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum += number 
        };
    }
    return sum
};
const number = [10, 30, 15, 45, 60];
const evenTotal = sumOfEvenNumber(number);
// console.log(evenTotal);


function sumOfOddNumbers(numbers){
    let sum = 0;
    for(const num of numbers){
        if(num % 2 === 1){
            sum += num
        }
    }
    return sum;
};
const numbers = [10, 15, 21, 23, 11, 20, 40];
const oddTotal = sumOfOddNumbers(numbers);
// console.log('The Odd Numbers total =', oddTotal);



// Practice Function Jungson

function friendsOddNumbers (numbers){
    let sum = 0;
    for(const num of numbers){
        if(num % 2 ===1){
            sum +=num;
        }
    }
    return sum
};
const oddNum = [5, 15, 8, 7];
const sumTotal= friendsOddNumbers(oddNum);
// console.log(sumTotal);


function getFirstSmallest(arr){
    if(arr.length === 0){
        return 'Array is empty'
    }
    
    let smallest = arr[0]; // assume the first element is the smallest 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
};

let numbersArr = [20, 25, 15, 10, 50, 5, 85]
let result = getFirstSmallest(numbersArr);
// console.log('The Smallest element is', result);


/*
Explanation (in Bengali):

    arr[0] কে প্রথমেই ছোটতম ধরে নিচ্ছি।

    এরপর লুপ চালিয়ে প্রতিটি উপাদান চেক করছি যদি কোনোটা smallest এর চেয়ে ছোট হয় তাহলে সেটাই নতুন smallest হয়ে যাবে।

    ফলে প্রথম ছোটতম সংখ্যাটাই return হবে।
*/

let numbersArray = [45, 22, 89, 17, 56];
let smallest = Math.min(...numbersArray);
// console.log("First smallest element is:", smallest);


// Find small element of first two array element

function firstSmallElement (arr){
    if(arr.length < 2){
        return 'Array Must be contain at least two element'
    }

    return arr[0] < arr[1] ? arr[0] : arr[1];
};
let array = [25, 15, 10, 40];
let resultOfArray = firstSmallElement(array);
// console.log(resultOfArray);


/*
function getSmallerOfFirstTwo(arr) {
    if (arr.length < 2) {
        return "অ্যারে-তে অন্তত দুইটি উপাদান থাকতে হবে।";
    }

    return arr[0] < arr[1] ? arr[0] : arr[1];
}

// উদাহরণ:

let ArrayNumbers = [45, 35, 100, 20];
let arrayResult = getSmallerOfFirstTwo(ArrayNumbers);
console.log("প্রথম দুইটির মধ্যে ছোটটি হলো:", arrayResult);


ব্যাখ্যা (Bengali):

    প্রথমে চেক করছি অ্যারেতে কমপক্ষে ২টি উপাদান আছে কি না।

    এরপর ternary operator ব্যবহার করে চেক করছি arr[0] < arr[1] কিনা।

        যদি হয়, তাহলে arr[0] রিটার্ন করবে।

        না হলে arr[1] রিটার্ন করবে।
*/

function myAge (age){
    if(age < 18){
        return 'My Age is 18 years.'
    } else if(age > 45){
        return 'My Age is 45 years.'
    } else if (age >= 18 && age <= 45){
        return 'My Age is ' +  age + ' years.';
    } else{
        return 'Not A Valid Number'
    }
};

// console.log(myAge(25));

/*

উন্নত ও যাচাইকৃত ফাংশন 

function myAge (age){

    // Check if age is a number and not NaN

    if (typeof age !== 'number' || isNaN(age)) {
        return 'Not a valid number.';
    }

    if(age < 18){
        return 'My Age is 18 years.';
    } else if(age > 45){
        return 'My Age is 45 years.';
    } else{
        return 'My Age is ' +  age + ' years.';
    }
};

console.log(myAge(20));
*/

function dividedArray (arr){

    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid or empty array.";
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 4 === 0){
            sum += arr[i];
        } 
    }
    return sum === 0 ? 'No elements divisible by 4.' : sum;
};

let friendArray = [2, 4, 5, 7, 8, 32, 16, 45];
let sumOfFriendArr = dividedArray(friendArray);
// console.log(sumOfFriendArr);


function processNumber (num) {
    if(typeof num !== 'number' || isNaN(num)){
        return 'Invalid input, please enter a valid number.'
    }

    if(num < 20){
        return num * 2
    } else {
        return num / 20;
    }
};
// console.log(processNumber(25));


function negativeArray(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return "Invalid Or Empty Array"
    }

    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            total += arr[i];
        }
    }
    return total === 0 ? "No Negative Array Element" : total;
};
let negArr = [-10, 15, 20, -30, 15];
let totalArr = negativeArray(negArr);
// console.log(totalArr);

function multiArray (arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return "Invalid Or Empty Array"
    }

    let sumOf = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 === 0){
            sumOf *= arr[i];
        }
    }
    return sumOf === 1 ? "No Element divisible by 3" : sumOf;
};
let multiArr = [15, 3, 10, 20, 23];
let totalOf = multiArray(multiArr);
console.log(totalOf)