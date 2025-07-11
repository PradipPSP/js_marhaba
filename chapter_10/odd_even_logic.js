
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
    // console.log(even);

    let evenAverage = 0;
    for(const number of even){
        evenAverage += number
    }
    // console.log('Average of Even Numbers:', evenAverage / even.length);

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
  for(const number of numbers){
        if(number % 2 === 1){
            return 'Odd Number Found: '
        } 
    }
     return 'No Odd Number Found';
}
const numArray = [6, 8, 10, 12];
// console.log(oddArray2(numArray));


/*
function checkForOdd(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'Invalid or empty array';
  }

  // .some() stops as soon as it meets the first odd number
  const hasOdd = arr.some(n => n % 2 !== 0);

  return hasOdd ? 'Odd number found' : 'No odd number found';
}

// ➤ Examples
console.log(checkForOdd([2, 4, 6]));          // No odd number found
console.log(checkForOdd([2, 3, 4, 6]));       // Odd number found
console.log(checkForOdd([7, 11, 13]));        // Odd number found

কী হচ্ছে এখানে (সংক্ষেপে বাংলা ব্যাখ্যা)

    **ইনপুট যাচাই **—‌প্রথমেই দেখি এটা আসলেই অ্যারে কিনা এবং ফাঁকা কিনা।

    .some() মেথড—‌অ্যারের প্রতিটি উপাদান খুঁজে দেখে প্রথম যেটা (n % 2 !== 0) সত্য করে, তখনই true রিটার্ন করে, ফলে পুরো অ্যারে ঘুরতে হয় না।

    টের্নারি অপারেটর— hasOdd ভিত্তিতে মেসেজ ঠিক করে দেয়।

লুপ দিয়ে করতে চাইলে

function checkForOddLoop(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'Invalid or empty array';
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return 'Odd number found';
    }
  }
  return 'No odd number found';
}
*/

function averageOfOddNumbers(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 === 1);

    if (oddNumbers.length === 0) return 0;

    const sum = oddNumbers.reduce((acc, val) => acc + val, 0);
    const average = sum / oddNumbers.length;

    return parseFloat(average.toFixed(2));
}

const numList = [1, 2, 3, 4, 5, 6, 7, 9, 9];
// console.log("Odd Average (2 decimal):", averageOfOddNumbers(numList));


function subtractOneFromOdds(numbers) {
    const result = numbers
        .filter(num => num % 2 === 1)  // শুধু বিজোড় সংখ্যা রাখো
        .map(num => num - 1);          // প্রতিটি থেকে ১ বিয়োগ করো

    return result;
}

const numList2 = [1, 2, 3, 4, 5, 6, 7];
console.log('New Array:', subtractOneFromOdds(numList2));



