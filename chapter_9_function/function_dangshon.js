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
console.log(len);


// Practice Question Solve

function array (arr, elem){

}

