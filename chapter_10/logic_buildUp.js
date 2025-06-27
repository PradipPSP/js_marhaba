
function inchToFeet (inch){
   const feet = inch / 12;
   return feet;
};
const tableHeight = inchToFeet(38);
console.log(tableHeight);



function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';

    return result;

};
const glassHeight = inchToFeet2(55);
console.log(glassHeight);