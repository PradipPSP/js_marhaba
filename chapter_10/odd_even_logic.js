
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
console.log('Average of the Even numbers is:', average);

