
// Object.keys()

// কাজ: অবজেক্টের এর all key show করে 

const computer = {
    brand : 'lenovo',
    price : 35000,
    processor : 'inter',
    ssd : '512gb'
};
const keys = Object.keys(computer);
console.log(keys);



// Object.values()

// কাজ: অবজেক্টের এর all value show করে 

const values = Object.values(computer);
console.log(values);



// how to check object property in a object অর্থাৎ কোন অবজেক্টের ভিতরে কোন পোপার্ট আছে কি না চেক করা 

const profile = {
   name : 'Pratim Mondal',
   age : 4,
   city : 'Satkhira' 
};
const profileKeys = Object.keys(profile); // at first search all profile keys
const hasName = profileKeys.includes('name'); // নাম আছে কি না চেক করা 
console.log(hasName); // true