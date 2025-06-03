
// loop

const numbers = [12, 95, 84, 56, 74, 15, 10];
for (const num of numbers){
    // console.log(num);
};

const fruits = ['apple', 'banana', 'jackfruits', 'mango'];
for (const item of fruits){
    // console.log(item);
};

// loof practice

const colleague = ['bishonath', 'jagatbrato', 'subrata', 'provash', 'ranjit'];
for(const offColleague of colleague){
    // console.log(offColleague);
};

const favFoods = ['rice', 'dal', 'fish', 'meet', 'egg'];
for(const food of favFoods){
    // console.log(food);
};

const dateOfBirth = [1957, 1977, 1991, 1994, 2021];
for(const year of dateOfBirth){
    // console.log(year);
};

const favCricketTeam = ['Sachin', 'Ganguli', 'Dravid', 'Laxman', 'Gavasker'];
for(const favTeam of favCricketTeam){
    // console.log(favTeam);
};

const examDate = ['june 15', 'june 18', 'june 22', 'june 30']
for (const exam of examDate){
    // console.log(exam);
};

// while loop

/*
Declare a loop variable with an initial value
while(loop condition){
    repetitive task
    Change the value of the loop variable
} */

/*
let num = 0; // (step 1 & 2: declear a variable name & initial value)
while(num < 5){ // condition (step 3: loop condition)
    console.log(num); // (step 4: repetitive rask)
    num = num + 1; // change value (step 5: change the value)
};
*/

let num =0;
while(num <= 10){
    // console.log(num);
    // num = num + 1 // way 1
    // num += 1 // way 2
    // num++ // way 3
};

let num2 = 0;
while(num2 <= 5){
    // console.log('Bamboo Eating High School');
    num2++
};

// practice while loop

let num3 =1;
while(num3 <= 10){
    // console.log('I will practice coding at least 3 hours in a day');
    num++;
};

let num4 =1;
while(num4 <=20){
    // console.log(num4);
    num4++;
}


let num5 =50;
while(num5 <=100){
    // console.log(num5);
    num5++;
}

let num6 =1;
while(num6 <=10){
    console.log(num6 * 3);
   num6++
};

let num7 =90;
while(num7 <=110){
    console.log(num7 / 2);
   num7++
};

let num8 = 1;
let sum = 0;
while(num8<=10){
    // console.log(num8);
    sum = sum + num8;
    num8++;
}
console.log("Sum :", sum);