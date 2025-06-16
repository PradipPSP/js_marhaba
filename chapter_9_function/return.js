
// return 

function tenTimes (numbers){
    const result = numbers * 10;
    return result;
};
const output = tenTimes(10);
// console.log(output); // 100


/* function add(price1, price2){
    const total = price1 + price2;
    return total;
};
const showResult = add(20, 30);
console.log(showResult);
*/

// Short form

function add (price1, price2){
    return price1 + price2;
};
const showResult = add(20, 30);
// console.log(showResult);


const potato = 25;
const onion = 62;
const shirt = 500;
const pant = 1250;

function add (price1, price2){
    return price1 + price2;
};
const bill1 = add (potato, onion);
const bill2 = add (shirt, pant);
const total = add (bill1, bill2);
// console.log(total);


function doMatch (num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
};
const result = doMatch (10, 5);
// console.log(result);


function isEven(number){
    if(number % 2 ===0){
        return true;
    } else{
        return false;
    }
};
// console.log(isEven(8));
// console.log(isEven(7));


function isOdd(num){
    if(num % 2 === 1){
        return true;
    } else{
        return false;
    }
};
// console.log(isOdd(9));
// console.log(isOdd(8));


// Practice 

function largeTen(num){
    if(num > 10){
        return true;
    }else{
        return false;
    }
};
// console.log(largeTen(11));
// console.log(largeTen(10));

function dividedBy13 (num){
    if(num % 13 === 0){
        return true;
    }else{
        return false;
    }
};
// console.log(dividedBy13(26));
// console.log(dividedBy13(27));



function restaurant (rice, curry, drinks){
    const totalPrice = rice + curry + drinks;
    // console.log('Total Bill is', totalPrice, 'tk.');
};
let rice = 40;
let curry = 60;
let drinks = 20;

restaurant(rice, curry, drinks);


/* function isVote (age){
    if(age > 18){
        console.log('Eligible for Voting')
    }else{
        console.log('Not Eligible')
    }
};
isVote(18);
isVote(19);
*/

function nid (age){
    if(age > 18){
        return true;
    }else{
        return false;
    }
};
// console.log(nid(18));
// console.log(nid(19));

function getStringLength(str){
    return str.length;
};
let myString = 'Pradip Mondal';
let length = getStringLength(myString);
// console.log('The length of My String is', length);


function lengthOfString (str){
    let count = 0;
    for(let char of str){
        count++
    }
    return count;
};
let myStr = "Pratim Mondal";
let strLength = lengthOfString(myStr);
// console.log('The String Length is', strLength);

function averageNum (a, b, c){
    const average = (a + b + c) / 3;
    // console.log('The average number is', average);
};
averageNum(10, 15, 20);


function getAverageNumber (numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum / numbers.length;
};
let num = [100, 200, 400];
let average = getAverageNumber(num);
// console.log(average);

/*
ব্যাখ্যা বাংলায়:

    sum ভ্যারিয়েবল দিয়ে সব সংখ্যার যোগফল বের করছি।

    তারপর sum / numbers.length দিয়ে গড় (average) বের করছি।
*/


function isNegative (number){
    if(number < 0){
        // console.log(number * -1);
    } else{
        // console.log('Number is Positive');
    }
};
// isNegative(-5);


function ifNegative (num){
    if(num < 0){
        return num * -1; // return num < 0 ? num * -1 : num;
    }
    return num;
};
// console.log(ifNegative(-10));
// console.log(ifNegative(18));


function evenSizedString(str){
    console.log(str);
};
evenSizedString('Dhaka');