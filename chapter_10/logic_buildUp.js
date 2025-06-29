
function inchToFeet (inch){
   const feet = inch / 12;
   return feet;
};
const tableHeight = inchToFeet(38);
// console.log(tableHeight);



function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';

    return result;

};
const glassHeight = inchToFeet2(55);
// console.log(glassHeight);

function mileToKilometer(mile){
    const kilometer = mile * 1.60934;
    return kilometer;
};
const mile = 50;
// console.log(mileToKilometer(mile));


function kiloToMile(kilo){
    const mile2 = kilo * 0.621371;
    return mile2;
};
const result = kiloToMile(50);
// console.log(result);


// Practice


function mileToGoj(mile){
    const goj = mile * 1760;
    return goj
};

const totalGoj = mileToGoj(13);
// console.log(totalGoj);

function kiloWatToKilowKalory (kiloWat){
    const kiloKalory = kiloWat * 860;
    return kiloKalory;
};
console.log(kiloWatToKilowKalory(5));
