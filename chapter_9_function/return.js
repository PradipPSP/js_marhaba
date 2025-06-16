
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
console.log(dividedBy13(26));
console.log(dividedBy13(27));