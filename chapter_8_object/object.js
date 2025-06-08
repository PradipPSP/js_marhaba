// Object
// Syntax: const students = {}

const { Children } = require("react");

// practice

const teacher = {
    name : "Rabin Mondal",
    subject : "Math",
    age : 59,
    homeDistrict : "Satkhira",
    schoolName : "R.K High School"
};
// console.log(teacher.name);
// console.log(teacher);

const tree = {
    name : "Mango Tree",
    age : 25,
    height : "Eight Feet",
    fruit : true 
};
// console.log(tree.fruit);

const cow = {
    name : "lalu",
    age : 10,
    isTeeth : true,
    color : "white",
    leg : 4,
    eye : 2,
    height : "four Feet" 
};
// console.log(cow.color);

const father = {
    name : "Sukumar Mondal",
    profession : "Farmer",
    age : 65,
    Children : 3,
    height : 5.2,
    village : "Horinkhola",
    district : "Satkhira"
};
// console.log(father.profession);
// console.log(father.name);

const motorbike = {
    name : "Sp Shine",
    brand : "Honda",
    color : "Blue",
    price : 129000,
    tyre : 2,
    highSpeed : 100
}
// console.log(motorbike.brand);
// console.log(motorbike.name);

const bird = {
    name : "Moyna",
    color : "Mat Black",
    food : "Insects",
    home : "Tree Branch"
}
// console.log(bird.name)

const laptop = {
    name : "HP ProBook",
    brand : "HP",
    processor : "core i5",
    gen : 7,
    ram : 4,
    display : 15,
    price : 75000
};
// console.log(laptop.brand);

const college = {
    name : "vnc",
    class : ['11', '12'],
    events : ['science fair', 'bijoy dibos', '21 fab'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top'
        }
    }
};
// console.log(college.unique.color);
// console.log(college.unique.result.merit);
// console.log(college.events[1]);



// Practice Home inside Home

const player = {
    name : 'Shourav Ganguli',
    age : 55,
    sports : 'cricket',
    team : 'India',
    isRetire: true 
};
// console.log(player.team);


const laptop2 = {
    brand : "Dell",
    price : 60000,
    hardDisk : 512,
    ram : 4,
    screenSize : 14
};
// console.log(laptop2.screenSize);


const favPlace = {
    name : "Cox's Bazar",
    distance: "400km",
    popularity : 'high'
}
// console.log(favPlace['popularity']);


const phone = {
    brand : 'Nokia',
    color : 'black',
    price : 5000
};
// console.log(phone['price']);


const library = {
    name :  'public library',
    location : 'Dhaka',
    books : 5000
};
// console.log(library.location);

const movie = {
    name : 'Inception',
    director : 'Nolan',
    rating : 9
};
// console.log(movie.rating);


const college2 = {
    name : 'ndc',
    established : 1949,
    groups : ['Science', 'Arts', 'Commerce']
};
// console.


const family = {
    father : {
        name : 'Sukumar Mondal',
        age : 65,
        profession : 'Farmer'
    },
    mother : {
        name : 'Amari Mondal',
        age : 51,
        profession : 'House Wife'
    }
};
console.log(family.father.age);
console.log(family.mother.age);

let fatherAge = family.father.age;
let motherAge = family.mother.age;
console.log(fatherAge + motherAge);




