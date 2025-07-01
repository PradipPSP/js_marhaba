
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
// console.log(kiloWatToKilowKalory(5));



function hourToSecond (hour){
    const totalSecond = hour * 3600;
    return totalSecond;
};
// console.log(hourToSecond(5))


function cmToMeter(cm){
    if(typeof cm !== 'number' || cm < 0){
        return 'PLease enter a valid non-negative number';
    }
    return cm / 100;
};
// console.log(cmToMeter(350));


function inchToCm(inch){
    if(typeof inch !== 'number' || inch < 0){
        return 'Please enter a valid non-negative number'
    }
    return inch * 2.54;
};
// console.log(inchToCm(300));


function poundToKilogram(pound){
    if(typeof pound !== 'number' || pound < 0){
        return 'Please enter a valid non-negative number'
    }
    return pound * 0.453;
};
// console.log(poundToKilogram(12))


function gojToMeter(goj){
    if(typeof goj !== 'number' || goj < 0){
        return 'Please enter a valid non-negative number'
    }
    return goj * 0.91;
};
// console.log(gojToMeter(50))


function dayToMonth(day){
    if(typeof day !== 'number' || day < 0){
        return 'Please enter a valid non-negative number'
    }
    return day / 30;
};
// console.log(dayToMonth(75))



/* function isLeapYear(year){
    if(typeof year !== 'number' || year < 0){
        return 'Please enter a valid non-negative number'
    } else if(year % 400 === 0){
        return true;
    } else if(year % 100 === 0){
        return false;
    } else if(year % 4 === 0){
        return true;
    } else{
        return false;
    }
};
const isLipYear1 = isLeapYear(2100);
const isLipYear2 = isLeapYear(2400);
const isLipYear3 = isLeapYear(2500);
const isLipYear4 = isLeapYear(2052);
console.log(isLipYear1, isLipYear2, isLipYear3, isLipYear4);
*/
// উন্নত সংস্করণ (ছোট করে লেখা):


function isLeapYear(year){
    if(typeof year !== 'number' || year < 0){
        return 'Please enter a valid non-negative number'
    }
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
};
const isLipYear1 = isLeapYear(2100);
const isLipYear2 = isLeapYear(2400);
const isLipYear3 = isLeapYear(2500);
const isLipYear4 = isLeapYear(2052);
// console.log(isLipYear1, isLipYear2, isLipYear3, isLipYear4);

/*
এই লজিক অনুযায়ী:

    যদি year 400 দিয়ে ভাগ যায় (অর্থাৎ year % 400 === 0 হয়), তাহলে লিপ ইয়ার (true)
    উদাহরণ: 2000, 2400

    অথবা (OR) যদি:

        year 4 দিয়ে ভাগ যায় (i.e., year % 4 === 0)

        এবং year 100 দিয়ে ভাগ না যায় (i.e., year % 100 !== 0)
        তাহলে লিপ ইয়ার (true)
        উদাহরণ: 2024, 2052

    উপরের কোনোটাই যদি না মেলে, তাহলে false রিটার্ন হবে।
*/


// Practice 2

/* function taxReturn(income){
    if(typeof income !== 'number' || income < 0){
        return 'Please enter a valid non-negative number'
    } else if(income <= 50000){
        return (income * 10) / 100;
    } else if(income >= 50001 && income <= 100000){
        return (income * 20) / 100;
    } else if(income >= 100001 && income <= 200000){
        return (income * 30) / 100;
    } else if(income >= 200001){
        return (income * 40) / 100;
    } else{
        return 'Invalid Number'
    }
};
console.log(taxReturn(250000));
*/
/*
function taxReturn(income){
    if(typeof income !== 'number' || income < 0)      return 'Please enter a valid non-negative number'
    if(income <= 50000) return income * 0.10;
    if(income <= 100000) return income * 0.20;
    if(income <= 200000) return income * 0.30;
    return income * 0.40;
};
console.log(taxReturn(35000));
*/


// আমরা অবজেক্টের মাধ্যমে সম্পূর্ণ তথ্য তুলে ধরতে পারি

function taxReturn(income){
    if(typeof income !== 'number' || income < 0){
        return 'Please enter a valid non-negative number'
    }

    let rate;
    if(income <= 50000){
        rate = 0.10;
    } else if(income <= 100000){
        rate = 0.20;
    } else if(income <=200000){
        rate = 0.30;
    } else{
        rate = 0.40;
    }

    const taxAmount = income * rate;
    const afterTax = income - taxAmount;

    return{
        income: income,
        taxRate : (rate * 100) + '%',
        taxAmount : taxAmount,
        remaining : afterTax
    }
};
// console.log(taxReturn(30000));


/* function deliveryCharge(kg){
    if(typeof kg !== 'number' || kg < 0) return 'Please enter a valid non-negative number';

    if(kg < 10) return '100 tk.';
    if(kg < 20) return '300 tk.'
    if(kg < 50) return '1000 tk.';
    if(kg >= 50) return (kg * 100) + ' tk.'
};
console.log(deliveryCharge(55));
*/

// আমরা অবজেক্টের মাধ্যমে সম্পূর্ণ তথ্য তুলে ধরতে পারি

function deliveryCharge(kg){
    if(typeof kg !== 'number' || kg < 0){
        return 'Please enter a valid non-negative number'
    }

    let charge;

    if(kg < 10){
        charge = '100 tk.'
    } else if(kg < 20){
        charge = '300 tk.'
    } else if(kg < 50){
        charge = '1000 tk.'
    } else{
        charge = (kg * 100) + ' tk.'
    }

    return {
        weight : kg + ' kg.',
        charge : charge 
    }
};
console.log(deliveryCharge(55));
