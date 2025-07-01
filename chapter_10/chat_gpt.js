
// Loop practice

/*
// 1. ১ থেকে ১০ পর্যন্ত সংখ্যার যোগফল বের করো

let sum = 0;
for(let i = 1; i<= 10; i++){
    sum += i;
};
console.log(sum);


// 2. ১ থেকে ২০ পর্যন্ত জোড় সংখ্যা প্রিন্ট করো

for(let i = 2; i<= 20; i += 2){
    console.log(i);
};


// 3. ১ থেকে ২০ পর্যন্ত বিজোড় সংখ্যা প্রিন্ট করো

for(let i = 1; i < 20; i += 2){
    console.log(i);
};


// 4. ১০ থেকে ১ পর্যন্ত উল্টো করে সংখ্যা প্রিন্ট করো

for(let i = 10; i >=1; i--){
    console.log(i)
};


//  5. ৫ নাম্বারের গুণের টেবিল দেখাও (৫ x ১ = ৫ ... ৫ x ১০ = ৫০)

let i = 1;
while(i <= 10){
    console.log('5 x ' + i + ' =' + (5 * i))
    i++;
};
*/

// loop in array

// একটি অ্যারে [3, 6, 9, 12, 15, 18] থেকে সব সংখ্যার যোগফল বের করো।

function sumOfArray(numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num
    }
    return sum;
};
let numberArray = [3, 6, 9, 12, 15, 18]
// console.log(sumOfArray(numberArray));


// একটি অ্যারে থেকে শুধুমাত্র জোড় সংখ্যা প্রিন্ট করো।

function evenArray(numbers){
    let evenArr = [];
    for(const num of numbers){
       if(num % 2 === 0){
            evenArr.push(num)
       }
    }
    return evenArr;
};
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = evenArray(numArray);
// console.log(result);

// একটি অ্যারে থেকে সর্বোচ্চ সংখ্যা খুঁজে বের করো।

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25]
const largeNumber = Math.max(...Array);
// console.log(largeNumber);



// যে কোন সংখ্যা প্রাইম কি না চেক করা

/*
let num = 19;
let isPrime = true;

for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
        console.log(num + ' is prime')
    } else{
        console.log(num + ' is not prime')
    }
*/

// ফাংশনের মাধ্যমে যে কোন সংখ্যা প্রাইম কি না চেক করা

function primeNumber(num){
    if(num < 2) return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
let number = 13;
if(primeNumber(number)){
    console.log(number + ' is prime')
} else{
    console.log(number + ' is not prime')
}

// ১ থেকে ১০০ পর্যন্ত প্রাইম নাম্বার প্রিন্ট করো।

for(let num = 2; num <= 100; num++){
    let isPrime = true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(num);
    }
}
