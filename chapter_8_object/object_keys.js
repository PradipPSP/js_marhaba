
// Object.keys() || Object.values()

// কাজ: অবজেক্টের এর all key show করে 

const computer = {
    brand : 'lenovo',
    price : 35000,
    processor : 'inter',
    ssd : '512gb'
};
const keys = Object.keys(computer);
// console.log(keys);


// Object.values()

// কাজ: অবজেক্টের এর all value show করে 

const values = Object.values(computer);
// console.log(values);



// how to check object property in a object অর্থাৎ কোন অবজেক্টের ভিতরে কোন পোপার্ট আছে কি না চেক করা 

const profile = {
   name : 'Pratim Mondal',
   age : 4,
   city : 'Satkhira' 
};
const profileKeys = Object.keys(profile); // at first search all profile keys
const hasName = profileKeys.includes('name'); // নাম আছে কি না চেক করা 
// console.log(hasName); // true


// Way 2 || Easy Way

if('email' in profile){
    console.log('Email exists')
} else{
    console.log('No Email. No Spam')
};

// OutPut: No Eamil. No Spam


// way 3 || hasOwnProperty

if(profile.hasOwnProperty('email')){
    console.log('Email niye boroloki dekhai')
} else{
    console.log('Email chara jibon achol')
};

// OutPut : Email chara jibon achol.

if(profile.city === 'Dhaka'){
    console.log('Jam er sohor Dhaka')
} else{
    console.log('Aram sob gram e')
};

// Output : Aram sob gram e


// Object.entries()

// জোড়ায় জোড়ায় entries কর

const person = {
    name : 'Pradip Mondal',
    age : 36,
    country : 'Bangladesh'
};
const entries = Object.entries(person);
// console.log(entries); 

// এই আউটপুটে তুই দেখতে পাবি প্রতিটি প্রোপার্টির নাম এবং তার মান একটি অ্যারের ভেতরে জোড়া হিসেবে এসেছে। একে বলা হয় array of arrays বা two-dimensional array !