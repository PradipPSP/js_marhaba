
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