// Array: Arrays are the lifeblood of JavaScript. 
// Array Starts with o index number
// array.length = total array elements 


const numbers = [71, 72, 73, 74, 75, 76, 77, 78, 79]

const fruits = ["Apple", "Banana", "Orange", "Mango", "Guava"]

const vegetables = ["Tomato", "Potato", "Onion", "Eggplant", "Radish", "Carrot", "Lady's Finger", "Gourd", "Cucumber", "Garlic"]
// const size = vegetables.length
console.log(vegetables.length)

const favMovie = ["Dangal", "Animal", "Jawan", "Titanic", "Borbad"]

const oddNumbers = [11, 13, 17, 19, 23, 29]

const colors = ["Blue", "Red", "Pink", "White", "Black", "Yellow", "Purple"]

const friendsName = ["Dinesh", "Dilip", "Debrato", "Koushik", "Sanaj", "Daud", "Santana", "Rupali", "Rokon"]
console.log(friendsName[3])

const favBooks = ["Rich Dab Poor Dak", "Ekigai", "Time Management", "Atomic Habits", "Zero to One", "The Power of Positive Thinking", "The Art of Happiness", "Miracle Morning"]
console.log(favBooks[5])

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
digits[7] = 30;
console.log(digits)

const favGames = ["Free fire", "Pubji", "Candy Crush", "Tample Run"]
favGames[2] = "Subway Sarfer"
console.log(favGames)

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
digits[7] = 30;
console.log(digits)

const favGames = ["Free fire", "Pubji", "Candy Crush", "Tample Run"]
favGames[2] = "Subway Sarfer"
console.log(favGames)

const myFamily = ["Suchitra", "Pratim", "Raju", "Radhika", "Sukumar", "Amari", "Nitai", "Kona"]
console.log(myFamily[3])

const myVisitCountry = ["Nepal", "Maldives", "Thailand", "India", "New Zealand", "Bhutan"]
console.log(myVisitCountry[4])

const readingTable = ["Books", "Pen", "Scale", "Table Lamp", "BookSelf"]
console.log(readingTable[7])


// Array: .push() .pop() .shift() .unshift()
// array.push() = adding array elements at the end
// array.pop() = subtract array elements at the end
// array.shift() = subtract array elements at first
// array.unshift() = adding array elements at first

const numArray = [10, 20, 30, 40, 50]
numArray.push(60);
console.log(numArray)

const friendList = ["Moynul", "Nayan", "Razibul", "Reja"]
friendList.push("Pradip")
console.log(friendList)

const mobileGames = ["Free fire", "Pubji", "Candy Crush", "Tample Run"]
mobileGames.pop()
console.log(mobileGames)

const numArray2 = [24, 36, 48, 60]
numArray2.unshift(12);
console.log(numArray2)

const myBooks = ["Miracle Morning", "Rich Dab Poor Dak", "Ekigai", "Time Management", "Atomic Habits", "Zero to One", "The Power of Positive Thinking", "The Art of Happiness"]
myBooks.shift();
console.log(myBooks)
