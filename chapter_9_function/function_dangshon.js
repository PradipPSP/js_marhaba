/* ফাংশনের মাধ্যমে তুই একটা কাজ ডিফাইন করতে পারবি। কাজটাকে আরো ডায়নামিক করতে চাইলে প্যারামিটার করহার করতে পারবি। আবার, কাজটি সম্পন্ন করে যদি কোনো আউটপুট পেতে চাস, তাহলে রিটার্ন ষ্টেটমেন্ট করতে করে সেটাকে রিটার্ন করতে পারবি। এটাই হচ্ছে ফাংশনের বেসিক কথাবার্তা। এইগুলো সিম্পল মনে হলেও ফাংশনের প্র্যাকটিকাল কিছু উদাহরণ দেখলেই বুঝবি, এই জিনিসগুলোর ওপরেই বড় বড় সফটওয়ার বানানো হয়।

এখন একটা আংশন লিখ, যা তোর দেওয়া string-এর মধে জোড়সংখ্যক উপাদান আছে, নাকি বিজোড়সংখ্যক উপাদান আছে, তা return করবে।

এটাকে আমরা কয়েকটা স্টেপে করব। যাতে তুই বুঝতে পারস, কোনো একট প্রব্লেম সলভ করার জন্য বা কোনো একটা কিছু করার জন্য একজন প্রোগামার কীভাবে একটু একটু করে চিন্তা করে। একটু একটু করে কোড করে। সাথে সাথে আউটপুট ঢেক করে এবং আউটপুট ঠিক হলে নেক্সাট স্টেপে যায়। খুবই সিম্পল একটা উদাহরণ দিয়েই শুরু করি। কী বলিস?

স্টেপ-১: প্রথমে দেখব যে. আমাদের ফাংশনটা ঠিকঠাকমতো কাজ করছে কি না। অর্থাৎ সেটাকে একবার প্রিন্ট করে দেখব যে, এখানে আমাদের আংশনট কাজ করছে কি না।

function evenSizedString(str){
    console.log(str);
};
evenSizedString('Dhaka');

Output: Dhaka

আমাদের string টা ঠিকঠাক মতোই কাজ করছে।

স্টেপ-২: আমরা জানি, কীভাবে কোনো string-এর length বের করতে হয়। সেটাই ফাংশনের ভিতরে size নামে একটা ভেরিয়েবলে রাখলাম। তুই চাইলে keysh বা অন্য কোনো মিনিংফুল নাম দিতে পারস। মিনিংফুল নাম বলতে বোঝায় যে, নাম দিয়ে বোঝা যাবে বা ধারণা করা যাবে, এই ভেরিয়েবলের মধ্যে কী রাখা আছে বা এটার কাজ কি।

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
};
evenSizedString('Dhaka');

Output: Dhaka 5

স্টেপ-৩: এখন দেখব, যে length আমরা বের করেছি, সেটা জোড়সংখ্যা কি না?

function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        console.log('Even Size')
    }else{
        console.log('Odd Size')
    }
};
evenSizedString('Dhaka');

Output: Odd Size


// Return True || False

function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }else{
        return false;
    }
};
const isEven = evenSizedString('Human');
console.log(isEven);

Output: false


এখন হালকা একটু ডিফারেন্ট একটা ফাংশন দেখি। এইখানে দুইটা প্যারামিটার। প্রথম প্যারামিটারে একটা সংখ্যা। আর সেকেন্ড প্যারামিটারে একটা বুলিয়ান।

যদি সেকেন্ড প্যারামিটারের মান true হয়, তাহলে প্রথম প্যারামিটার হিসেবে যে সংখ্যা আসবে, সেটাকে দ্বিগুণ করে গুণফল রিটার্ন করবি। আর যদি সেকেন্ড প্যারামিটার false হয়, তাহলে প্রথম প্যারামিটারকে তিনগুণ করে রেজাল্টকে রিটার্ন করবি। নিচে এই ফাংশনকে দুইবার কল করা হয়েছে। দুইটা আলাদা প্যারামিটার দিয়ে।

function doubleOrTriple(num, doDouble) {
    if (doDouble === true) {
    const result = num * 2;
    return result;
} else {
    const result = num * 3;
    return result;
    }
};
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false))

Output:
10
15

এখানে তুই নতুন একটা জিনিস দেখতে পাচ্ছস, সেটা হচ্ছে আমরা প্যারামিটারের মধ্যে কোনো একটা বুলিয়ান ভ্যালু পাস করছি। সুতরাং তুই চাইলে যেকোনো ফাংশনের মধ্যে বুলিয়ান টাইপের ভ্যালু পাস করতে পারিস।

আবার, তুই চাইলে যেকোনো ফাংশনের মধ্যে প্যারামিটার হিসেবে array ও পাস করতে পারিস। নিচে একটা ফাংশন আছে, যেটার প্যারামিটার হিসেবে একটা nums নামক একটা array-কে নেওয়া হচ্ছে। তারপর সেই array-এর মধ্যে উপাদান কয়টা আছে, সেটাকে একটা ভেরিয়েবলে রেখে সেই ভেরিয়েবলকে রিটার্ন করে দিচ্ছে।

function numberOfElement(nums) {
    const len = nums.length;
    return len;
};

const len = numberOfElement([12, 15, 20, 222, 25, 4550, 10]);
console.log(len);

Output : 7

*/

 function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }else{
        return false;
    }
};
const isEven = evenSizedString('Human');
// console.log(isEven);



function doubleOrTriple(num, doDouble) {
    if (doDouble === true) {
    const result = num * 2;
    return result;
} else {
    const result = num * 3;
    return result;
    }
};
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOfElement(nums) {
    const len = nums.length;
    return len;
};

const len = numberOfElement([12, 15, 20, 222, 25, 4550, 10]);
// console.log(len);


// Practice Question Solve

function array (str){
    if(str.length % 2 === 0){
        return 'The Array Element is Even'
    }else{
        return 'The Array Element is Odd'
    }
};
// console.log(array('Pratim Mondal'));


function checkArrayDetails (arr){
    if(arr.length % 2 === 0){
        return 'The Array Element is Even.'
    }else{
        return 'The Array Element is Odd.'
    }
};
let myArray = [10, 20, 30, 40, 50, 60];
// console.log(checkArrayDetails(myArray));



function chekckArrDetails (arr){
    if(arr.length === 0){
        return 'Empty Array'
    }

    // শুধু সংখ্যাগুলো বের করলাম
    let numberitems = arr.filter(item => typeof item === 'number');

    // যদি কোনো সংখ্যা না থাকে
        if(numberitems.length === 0 || numberitems.length !== arr.length){
            return 'The Arrary is mixed or no element'
        } 

        // এখন সংখ্যা গুনে জোড়/বিজোড় বলব
        if(numberitems.length % 2 === 0){
            return 'The Array Element is Even.'
        } else{
            return 'The Array Element is Odd.'
        }
};


// AI Help

/*
তোর দেওয়া অ্যারের মধ্যে যতগুলি উপদান আছে, উপাদানের সংখ্যা জোড় না কি বিজোড়, তা চেক করার ফাংশন লিখ
ChatGPT said:

নিচে একটি জাভাস্ক্রিপ্ট ফাংশন দেওয়া হলো যা একটি অ্যারের উপাদানের সংখ্যা জোড় (even) না বিজোড় (odd) তা চেক করবে এবং ফলাফল রিটার্ন করবে:

function checkArrayLengthType(arr) {
    if (arr.length % 2 === 0) {
        return "অ্যারে উপাদানের সংখ্যা জোড়";
    } else {
        return "অ্যারে উপাদানের সংখ্যা বিজোড়";
    }
}

// উদাহরণ:
let myArray = [10, 20, 30, 40, 50];
console.log(checkArrayLengthType(myArray)); // আউটপুট: অ্যারে উপাদানের সংখ্যা বিজোড়

ব্যাখ্যা:

    arr.length দিয়ে অ্যারের উপাদানের সংখ্যা বের করা হয়।

    % 2 === 0 মানে যদি সংখ্যা ২ দিয়ে ভাগ করলে ভাগশেষ (remainder) ০ হয়, তবে সেটা জোড় সংখ্যা।

    অন্যথায় সেটা বিজোড়।

চাইলে তুমি এই ফাংশন যেকোনো অ্যারেতে ব্যবহার করতে পারো। প্রয়োজনে বলো, আমি আরও জটিল শর্ত যুক্ত করে দিতেও পারি।
You said:
জটিল শর্ত দিন
ChatGPT said:

চল, এবার আমরা একটু জটিল শর্তসহ একটি ফাংশন তৈরি করি।

নতুন শর্তগুলো:

    ফাঁকা (empty) অ্যারে হলে বলবে: "অ্যারে ফাঁকা"

    অ্যারেতে যদি কেবল সংখ্যা থাকে, তাহলে জোড়/বিজোড় চেক করবে।

    যদি অ্যারেতে সংখ্যা ছাড়া অন্য কিছু (স্ট্রিং, অবজেক্ট, ইত্যাদি) থাকে, তাহলে বলবে: "অ্যারেতে সংখ্যাভিত্তিক উপাদান নেই বা মিশ্র উপাদান আছে"

✅ জাভাস্ক্রিপ্ট ফাংশন:

function checkArrayDetails(arr) {
    if (arr.length === 0) {
        return "অ্যারে ফাঁকা";
    }

    // শুধু সংখ্যাগুলো বের করলাম
    let numberItems = arr.filter(item => typeof item === 'number');

    // যদি কোনো সংখ্যা না থাকে
    if (numberItems.length === 0 || numberItems.length !== arr.length) {
        return "অ্যারেতে সংখ্যাভিত্তিক উপাদান নেই বা মিশ্র উপাদান আছে";
    }

    // এখন সংখ্যা গুনে জোড়/বিজোড় বলব
    if (numberItems.length % 2 === 0) {
        return "অ্যারে উপাদানের সংখ্যা জোড়";
    } else {
        return "অ্যারে উপাদানের সংখ্যা বিজোড়";
    }
}

✅ উদাহরণ:

console.log(checkArrayDetails([]));
// আউটপুট: অ্যারে ফাঁকা

console.log(checkArrayDetails([1, 2, 3]));
// আউটপুট: অ্যারে উপাদানের সংখ্যা বিজোড়

console.log(checkArrayDetails([1, 2, 3, 4]));
// আউটপুট: অ্যারে উপাদানের সংখ্যা জোড়

console.log(checkArrayDetails(["apple", 2, 3]));
// আউটপুট: অ্যারেতে সংখ্যাভিত্তিক উপাদান নেই বা মিশ্র উপাদান আছে

console.log(checkArrayDetails(["a", "b"]));
// আউটপুট: অ্যারেতে সংখ্যাভিত্তিক উপাদান নেই বা মিশ্র উপাদান আছে

চাইলে তুমি এই ফাংশনকে আরও উন্নত করতে পারো — যেমন, শুধু সংখ্যাগুলোকে হিসেব করে জোড়/বিজোড় গণনা করা, বা সংখ্যা বাদে অন্য ডেটা টাইপের সংখ্যা বের করা ইত্যাদি। জানাও, চাইলে আমি আরও উন্নত সংস্করণ বানিয়ে দিতে পারি।
You said:
let numberitems = arr.filter(item => typeof item === 'number'); 
describe the logic building in bengali
ChatGPT said:

নিচের এই লাইনের কোড:

let numberItems = arr.filter(item => typeof item === 'number');

এর লজিক বা যুক্তি ধাপে ধাপে বাংলা ব্যাখ্যা নিচে দেওয়া হলো:
🔍 arr.filter(...)

filter() একটি জাভাস্ক্রিপ্ট অ্যারে মেথড, যা একটি ফাংশন ব্যবহার করে অ্যারের প্রতিটি উপাদান পরীক্ষা করে, এবং যেসব উপাদান সেই শর্ত পূরণ করে — শুধু সেগুলোকে একটি নতুন অ্যারেতে রেখে দেয়।
🔍 item => typeof item === 'number'

এটি একটি অ্যারো ফাংশন (arrow function)।
এই ফাংশনটি filter() এর প্রতিটি উপাদানের উপর চালানো হয়।

    item হচ্ছে অ্যারের প্রতিটি উপাদান (একটা একটা করে ঘুরে দেখবে)

    typeof item — এটি চেক করে উপাদানটির ধরন (type) কী।

    typeof item === 'number' — এটি যাচাই করে, উপাদানটি সংখ্যাসূচক (number) কি না।

✅ ফলে কী হয়?

এই পুরো লাইনের মানে দাঁড়ায়:

👉 arr অ্যারের ভিতরে যে সব উপাদান number টাইপের (সংখ্যা), শুধু সেগুলো নিয়ে একটি নতুন অ্যারে তৈরি করো — এবং সেটিকে numberItems নামে সংরক্ষণ করো।
🔎 উদাহরণসহ:

let arr = [1, "hello", true, 5, null, 10];
let numberItems = arr.filter(item => typeof item === 'number');
console.log(numberItems); // Output: [1, 5, 10]

    এখানে arr তে ছিল: সংখ্যা, স্ট্রিং, বুলিয়ান, নাল।

    filter() শুধু সংখ্যাগুলো (1, 5, 10) বের করে numberItems তে রেখে দেয়।

প্রয়োজনে আমি filter মেথডের ব্যাখ্যা আরও উদাহরণসহ দিতে পারি। বললে দেই।
You said:
if(numberitems.length === 0 || numberitems.length !== arr.length){
            return 'The Arrary is mixed or no element'
        } 

describe the logic building in bengali
ChatGPT said:

তুমি যে কোডটি দিয়েছো:

if (numberItems.length === 0 || numberItems.length !== arr.length) {
    return 'The Array is mixed or no element';
}

এখানে লজিকটা খুবই গুরুত্বপূর্ণ। নিচে ধাপে ধাপে বাংলা ব্যাখ্যা করছি:
🔧 numberItems.length === 0

এ অংশটি পরীক্ষা করে:

    যদি numberItems অ্যারেতে কোনো উপাদান না থাকে, অর্থাৎ সংখ্যাসূচক (number) উপাদান একটাও না পাওয়া যায় —
    তাহলে বোঝা যায়, অরিজিনাল অ্যারেতে কোনো সংখ্যাই ছিল না।

🔧 numberItems.length !== arr.length

এই অংশটি পরীক্ষা করে:

    যদি সংখ্যাসূচক উপাদানের সংখ্যা (numberItems.length) এবং পুরো অ্যারের মোট উপাদানের সংখ্যা (arr.length) সমান না হয়,
    তাহলে বোঝা যায় যে অ্যারেটি মিশ্র (mixed) — অর্থাৎ কিছু সংখ্যা আছে, আবার কিছু অন্য টাইপের উপাদানও আছে (যেমন স্ট্রিং, বুলিয়ান ইত্যাদি)।

✅ পুরো শর্তের মানে:

if (numberItems.length === 0 || numberItems.length !== arr.length)

    যদি সংখ্যাসূচক উপাদান একটাও না থাকে,
    অথবা

    যদি সংখ্যার পাশাপাশি অন্য টাইপের উপাদানও থাকে,

তাহলে return করবে:

'The Array is mixed or no element'

অর্থাৎ – অ্যারে শুধু সংখ্যা নয়, এটা হয় পুরোটাই খালি সংখ্যাহীন, নয়তো মিশ্র টাইপের উপাদানে ভর্তি।
উদাহরণ:

let arr1 = ['a', true, null];
let numberItems = arr1.filter(item => typeof item === 'number');

if (numberItems.length === 0 || numberItems.length !== arr1.length) {
    console.log('The Array is mixed or no element');
}
// আউটপুট: The Array is mixed or no element

let arr2 = [1, 'hello', 5];
let numberItems = arr2.filter(item => typeof item === 'number');

if (numberItems.length === 0 || numberItems.length !== arr2.length) {
    console.log('The Array is mixed or no element');
}
// আউটপুট: The Array is mixed or no element

🔁 সংক্ষেপে:

এই শর্তটি মূলত নিশ্চিত করে যে:

    অ্যারেতে যদি শুধুমাত্র সংখ্যা না থাকে,
    তাহলে এটি "মিশ্র" বা "সংখ্যাবিহীন" অ্যারে — এবং সেই অনুযায়ী বার্তা ফেরত দেয়।

চাইলে আমি এই শর্তটিকে আরও অপ্টিমাইজ বা পরিষ্কারভাবে লিখেও দিতে পারি।
*/
