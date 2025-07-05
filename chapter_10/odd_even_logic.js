
// Odd numbers Average

function oddAverage(numbers){
    const odds = [];
    for(const num of numbers){
        if(num % 2 === 1){
            odds.push(num);
        }
    }
    let sum = 0;
    for(const num of odds){
        sum += num;
    }
    const count = odds.length;
    const avg = sum / count;
    // console.log('Average of the odd numbers : ', avg.toFixed(2));
}

const number = [12, 13, 65, 22, 25, 30]
// oddAverage(number);

// Even Number Average

/*
function evenNumAverage(numbers){
    const evenNum = [];

    for(const num of numbers){
        if(num % 2 !== 1){
            evenNum.push(num);
        }
    }
    // console.log(evenNum);

    let sum = 0;
    for(const num of evenNum){
        sum += num;
    }
    const evenCount = evenNum.length;
    const evenAverage = sum / evenCount;
    return evenAverage;
}

const numberArr = [12, 13, 65, 22, 25, 30, 40, 20];
// const numberArr = [15]
const average = evenNumAverage(numberArr);
console.log('Average of the Even numbers is: ', average.toFixed(2));
*/

// 2nd Way 

function evenNumAverage(numbers){
    const evenNum = [];

    for(const num of numbers){
        if(num % 2 !== 1){
            evenNum.push(num);
        }
    }
    // console.log(evenNum);
    if(evenNum.length === 0){
        return 0;
    }

    let sum = 0;
    for(const num of evenNum){
        sum += num;
    }
    const evenAverage = sum / evenNum.length;
    return evenAverage;
}

const numberArr = [12, 13, 65, 22, 25, 30, 40];
// const numberArr = [15, 13, 11, 9]
const average = evenNumAverage(numberArr);
// console.log('Average of the Even numbers is:', average);


// Practice 


function evenNumber (numbers){
    const even = [];

    for(const number of numbers){
        if(number % 2 === 0){
            even.push(number);
        }
    }
    console.log(even);

    let evenAverage = 0;
    for(const number of even){
        evenAverage += number
    }
    console.log('Average of Even Numbers:', evenAverage / even.length);
    
    // return evenAverage / even.length;
};
const numberList = [2, 4, 6, 8, 10];   
evenNumber(numberList);


function oddArray(numbers){
    const odd = [];

    for(const number of numbers){
        if(number % 2 !== 0){
            odd.push(number)
        }
    }
    // console.log(odd)

    let multiplied = [];
    for(const number of odd){
       multiplied.push(number * 2);
    }
    return multiplied;
    
    /* let total = 0;
    for(const number of odd){
        total += number * 2;
    }
    console.log('Sum of multiplied Odds:', total)
    */
};
const numberArray = [3, 5, 7, 6, 4, 8, 9];
const multiply = oddArray(numberArray);
// console.log('Multiplied by 2:', multiply);


function oddArray2(numbers){
    const odd = [];

    for(const number of numbers){
        if(number % 2 === 1){
            odd.push(number)
        }
    }
    // console.log(odd)
}
const numArray = [6, 8, 10, 12, 16]
oddArray2(numArray);

