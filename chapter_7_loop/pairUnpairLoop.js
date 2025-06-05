
// Pair Un pair 

// pair

for(let num = 1; num<=20; num++){
        if(num % 2 === 0){
            // console.log(num)
        }
}

for (let i = 2; i<=20; i += 2){
    // console.log(i)
}

// Not Pair

for(let num = 1; num<=20; num++){
        if(num % 2 != 0){
            console.log(num)
        }
}

for(let i = 1; i<=20; i +=2){
    console.log(i)
}

// divided by 5

for (let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}

// divided by 3 or 5
for(let i = 1; i<= 30; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i)
    }
}


// divided by 3 & 5
for(let i = 1; i<= 30; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i) // 15, 30
    }
}

// Practice Q

for (let i = 20; i <= 50; i++){
    if(i % 7 == 0){
        console.log(i)
    }
}

for(let i = 40; i<= 80; i++){
    if(i % 5 == 0 && i % 7 == 0){
        console.log(i)
    }
}


let sum = 0;
for (let i = 1; i <= 40; i++){
    if(i % 13 == 0){
        // console.log(i)
        sum = sum + i;
    }
};
console.log(sum);

for(let i = 1; i <= 50; i+=4){
    console.log(i)
};

for(let i = 0; i<= 100; i++){
    if(i % 6 == 0 && i % 9 == 0){
        console.log(i)
    }
}


let add = 0;
for(let i = 1; i<= 50; i++){
    if(i % 3 == 0 && i % 4 == 0){
        // console.log(i);
        add += i;
    }
}
console.log(add);