
// delete || Object.freeze() || Object.seal()

const { use } = require("react");

// delete

const person = {
    name : 'Pradip',
    age : 36,
    country : 'Bangladesh'
};
delete person.age;
// console.log(person);


// Object.freeze()
// কাজ : অবজেক্টের কোন মান ডিলিট করতে দিবে না, কোন প্রোপার্টি যোগ করতে দিবে না, কোন মান পরিবর্তন করতে দিবে না। 

const adminUser = {
    username : 'admin',
    email : 'admin@example.com',
    role : 'superadmin'
};
Object.freeze(adminUser);

// try to modify

adminUser.role = 'user';
adminUser.password = '1258657';
delete adminUser.email;
// console.log(adminUser);



// Object.seal()
// কাজ : অবজেক্টের কোন মান ডিলিট করতে দিবে না, কোন প্রোপার্টি যোগ করতে দিবে না। শুধুমাত্র অবজেক্টকে মোডিফাই করতে দিবে।

const user = {
    username : 'pradipmondal',
    email : 'pradipmondal@example.com',
    password : 'oldPassword'
};
Object.seal(user);

// try to change
delete user.password; // delete not allowed
user.nickName = 'Pratim Mondal' // adding not allowed
// console.log(user); // no work

// try to modify

user.username = 'pradip';
user.password = 'newPassWord';
// console.log(user);


// Difference between Seal & Freeze

// Seal & Freeze একই ধরণের জিনিস। হালকা পার্থক্য হচ্ছে, সিল প্রোপার্টি মান চেঞ্জ করতে দেয়, আর ফ্রিজ সেটাও করত দেয় না।


// practice

const headPhone = {
    brand : 'Sony',
    price : 3000,
    color : 'red'
};
Object.freeze(headPhone);
headPhone.warranty = 'true'; // no work
// console.log(headPhone);

const player = {
    name : 'Messi',
    goal : 800,
    club : 'Inter Miami'
};
Object.freeze(player);
player.team = 'Argentina'; // You can't change anything when use freeze()
// console.log(player);

const book = {
    title : 'Harry Potter',
    author : 'JK Rowling',
    pages : 500
};
Object.seal(book);
book.author = 'Rowling';
// console.log(book);


const gadget = {
    name : 'iPhone',
    price : 120000,
    color : 'black'
};
delete gadget.price;
// console.log(gadget);


const animal = {
    name : 'Tiger',
    location : 'Sundarban'
};
Object.freeze(animal);
animal.name = 'Royel Bengal Tiger';
animal.location = 'Sundarban BD';
// console.log(animal);


const food = {
    name : 'Pizza',
    price : 500,
    size : 'Large'
};
Object.seal(food);
food.price = 450;
console.log(food);
