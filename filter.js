
// const numbers = [2, 4, 6, 8, 10, 12, 14]
// const upToTenNum = numbers.filter(num => num > 10)
// console.log(upToTenNum)

// const itemsPrice = [30, 45, 20, 60, 10]
// const updateItemsPrice = itemsPrice.map(items => items + 13);
// console.log(updateItemsPrice)

const numbers = [10, 20, 30, 50, 800, 500, 100]

function doubledAll (numbers){ // doubledAll function এর প্যারামিটার হিসাবে const numbers Array ta ধরতে হবে।
    doubled = []; // Blunk Arr Create korlam
        for(const num of numbers){ 
            const value = num * 2;
        doubled.push(value);
        } // loop চালিয়ে const numbers Array এর ভ্যালু টা ডাবল করলাম এবং ডাবল শুন্য এ্যারের মধ্যে কনস্ট ্ভ্যালু পুশ করলাম। 
    return doubled;
};
// console.log(doubledAll(arr));


let str = "pradip mondal"

for (let i = 0; i <str.length; i++){
    console.log(str[i])
}

// ব্যাখ্যাঃ a - b 

// ০১. হতে পারে a - b এর মান পজিটিভ সংখ্যা অর্থাৎ বি ছোট, এ বড়। সেক্ষেত্রে বি আগে এবং এ পরে বসবে।

// ০২. হতে পারে a - b এর মান নেগেটিভ সংখ্যা অর্থাৎ বি বড়, এ ছোট। সেক্ষেত্রে এ আগে এবং বি পরে বসবে।

// ০৩. হতে পারে a - b এর মান সমান অর্থাৎ কেউ বড় বা ছোট নয়। সেক্ষেত্রে এ'র জায়গায় এ এবং বি'র জায়গায় বি বসবে।

// বড় হতে ছোট সাজানো ঃ (a, b) => b - a

const numaric3 = [59, 69, 39, 29, 99, 19, 89, 49, 39, 9, 79];
numaric3.sort((a, b) => b - a);
console.log(numaric3); // [99, 89, 79, 69, 59, 49, 39, 39, 29, 19, 9]

// object সাজানো

const offCollegueList = [
  { name: 'Moynul', age: 30},
  { name: 'Nayon', age: 28},
  { name: 'Morirul', age: 29},
  { name: 'Bishonath', age: 55},
  { name: 'Jaggatbrato', age: 57},
  { name: 'Subrata', age: 34},
  { name: 'Provash', age: 44},
  { name: 'Ankur', age: 21},
  { name: 'Bipul', age: 49},
  { name: 'Pratim', age: 3.6}
];
offCollegueList.sort((a, b) => a.age - b.age);
console.log(offCollegueList);

const friends5 = [
  { name: 'Zara', age: 25},
  { name: 'Bob', age: 20},
  { name: 'Anna', age: 30}
];
friends5.sort((a, b) => a.age - b.age);
console.log(friends5);