
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
    console.log('Average of the odd numbers : ', avg.toFixed(2));
}

const number = [12, 13, 65, 22, 25, 30]
oddAverage(number);