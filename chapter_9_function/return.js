
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
console.log(total);