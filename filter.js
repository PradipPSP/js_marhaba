
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

const agess = [
  {name: 'Ali', age: 29},
  {name: 'Jara', age: 22},
  {name: 'Tariq', age: 35}
];
agess.sort((a, b) => a.age - b.age);
console.log(agess);


