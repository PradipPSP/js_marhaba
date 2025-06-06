// Loop Break

for(let i = 1; i <= 15; i++){
    // console.log(i);
    if(i >= 7){
        break;
    }
}

// skip number from loop


for(let i = 1; i <= 10; i++){
    if(i == 7){
        continue; // This words skip if condition
    }
    // console.log(i)
};


for(let i = 1; i <= 10; i++){
    if(i == 5 || i == 7){
        continue; // This words skip if condition
    }
    // console.log(i)
}


// using continue to print Even numbers

for(let i = 1; i <= 15; i++){
    if(i % 2 == 1){
        continue;
    }
    // console.log(i)
}

// using continue to print Odd numbers

for(let i = 1; i <= 15; i++){
    if(i % 2 == 0){
        continue;
    }
    // console.log(i)
}

// last practice of loop

for(let i = 1; i <= 30; i++){
    if( i >= 16){
        break;
    }
    // console.log(i);
};


for(let i = 1; i <= 40; i++){
    if(i % 7 == 0){
        continue;
    }
    // console.log(i);
};


for(let i = 1; i <= 15; i++){
    if(i == 9){
        continue;
    }
    // console.log(i);
};


for(let i = 1; i <= 20; i++){
    if(i == 12){
        continue;
    }
    // console.log(i);
};


for(let i = 1; i <= 25; i++){
    if(i % 3 == 0){
        continue;
    }
    // console.log(i);
};

for(let i = 91; i <= 120; i++){
    if(i % 10 == 0){
        break;
    }
    console.log(i);
}