
// Using One Parameter/ arguments


function doubleIt(numbers){
    const doubled = numbers * 2;
    // console.log(doubled);
};
doubleIt(9);
doubleIt(81);
doubleIt(25);


function square (number){
    const borGo = number * number;
    // console.log('Square of', number, 'is:', borGo);
};
square(9);
square(81);
square(25);


// Using Two parameter/ Arguments

function add (num1, num2){
    const sum = num1 + num2;
    // console.log(sum);
};
add(15, 25);

function addAll(a, b, c, d, e){
    const total = a + b + c + d + e;
    // console.log(total);
};
addAll(15, 10, 15, 10, 25);


// function declear করে পরে variable এর মাধ্যমে agruments pass করা

function difference (x, y){
    const diff = x - y;
    // console.log(x, y, 'difference is', diff);
};
const fatherAge = 65;
const motherAge = 55;
difference(fatherAge, motherAge);


// parameter নিয়ে arguments

/* function addNumbers (a, b){
    return a + b;;
};
const result = addNumbers(5, 8, 10, 15, 20);
console.log(result); // 13 
*/

// অর্থাৎ এখানে প্রথম ২ টি আর্গুমেন্টস এর যোগফল বের করে দিচ্ছে এবং বাকিগুলি ইগনোর করছে। সবগুলি পেতে হলে ফাংশনের ভিতরে একটি চমৎকার জিনিস আছে, সেটাকে বলে arguments, আর কোনো ফাংশনের ভিতরে arguments কে কনসোল লগ করলে সেই ফাংশন কল করার সময় যত প্যারামিটার দেয়া হইছে, সব পেয়ে চাবি।

function addNumbers (a, b){
    console.log(arguments);
    return a + b;;
};
const result = addNumbers(5, 8, 10, 15, 20);
console.log(result); 