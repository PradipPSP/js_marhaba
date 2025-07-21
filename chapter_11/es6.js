// How to change the const value

const money = 100;
const rich = money + 1000;
// console.log(rich); // 1100
// console.log(money); // 100  

// যদিও const ভেরিয়েবল ডিক্লেয়ার করলে সেটার পুরো মান চেঞ্জ করা যয় না। তবে ভেরিয়েবল এর মান যদি অ্যারে বা অবজেক্ট হয়, তাহলে তার ভেতরের উপাদান বা পোপার্টি চেঞ্জ করা যায়। যেমনঃ

const numbers = [1, 2, 3, 4, 5];
numbers[1] = 10; // অ্যারে এর ভেতরের উপাদান চেঞ্জ করা হয়েছে
// console.log(numbers); // [1, 10, 3, 4, 5]   

// push pop

const numbers2 = [1, 2, 3, 4, 5];
numbers2.push(6, 10, 20); // অ্যারে এর শেষে নতুন উপাদান যোগ করা হয়েছে
numbers2[0] = 51;
// console.log(numbers2); // [51, 2, 3, 4, 5, 6, 10, 20]


// অবজেক্ট এর ক্ষেত্রেও একই নিয়ম প্রযোজ্য

const person = {
    name: 'John',
    age: 30
};
person.age = 31; // অবজেক্ট এর পোপার্টি চেঞ্জ করা হয়েছে
console.log(person); // { name: 'John', age: 31 }  

