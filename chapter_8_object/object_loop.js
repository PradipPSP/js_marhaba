
// for in loop || for of Loop 

// মাঝে মধ্যে অবজেক্টের ওপরে লুপ চালানোর প্রয়োজন হয়। এটা কয়েকভাবে করা যায়। তারমধ্যে সবচেয়ে কমন হচ্ছে for......in লুপ।

// এই for......in লুপ হচ্ছে for of Loop এর খালাতো ভাই। জাস্ট অ্যারের উপদানগুলোর ওপরে লুপ চালানোর জন্য for of চালাই। আর অবজেক্টের ওপরে লুপ চালানোর জন্য for in ইউজ করবো। 


const profile = {
   name : 'Pratim Mondal',
   age : 4,
   city : 'Satkhira' 
};

// for in loop

for (const key in profile){
    const value = profile[key];
    // console.log(key, value);
};

/* Output:
name Pratim Mondal
age 4
city Satkhira
*/



// for of loop

const keys = Object.keys(profile); // profile এর key গুলি একটি Array এর ভিতরে নিয়ে আসলো 
for(const key of keys){
    // console.log(key, profile[key])
};

// Object Practice

const book = {
    name : 'Think Positive',
    author : 'Self',
    price : 'free'
};
const bookKeys = Object.keys(book);
// console.log(bookKeys);

const bookValues = Object.values(book);
// console.log(bookValues);
