
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

const article = {
    title : 'Learning Js',
    category : 'Programming'
};

const articleKeys = Object.keys(article);
const hasAuthor = articleKeys.includes('author');
// console.log(hasAuthor); // false

// way 2

if('author' in article){
    console.log('author hasIn article');
} else{
    // console.log('No Author');
};

const laptop = {
    brand : "Dell",
    price : 60000,
    hardDisk : 512,
    ram : 4,
    screenSize : 14
};

for(const key in laptop){
    const value = laptop[key];
    // console.log(key, value);
}


const phone = {
    brand : 'Nokia',
    color : 'black',
    price : 5000
};

const phoneKeys = Object.keys(phone);
for(const key of phoneKeys){
    const value = phone[key];
    // console.log(key, value);
};


const bike = {
    name : "Sp Shine",
    brand : "Honda",
    color : "Blue",
    price : 129000,
    tyre : 2,
    highSpeed : 100
};
const bikeValues = Object.values(bike);
// console.log(bikeValues);

const books = {
    book1 : 'Herry Potter',
    book2 : 'The Hobbit',
    book3 : 'Game of Thrones'
};
for(const key in books){
    const value = books[key];
    console.log(value);
};



