
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