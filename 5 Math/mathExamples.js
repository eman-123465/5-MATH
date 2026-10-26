'use strict';

const P_ANSWERS = document.getElementById(`p-answers`);

let top6Average = (83 + 79 + 78 + 90 + 95 + 87) / 6;
 alert (Math.round(top6Average));


alert( (83 + 79 + 78 + 90 + 95 + 87) / 6 );


calcCompoundInterest();

function calcCompoundInterest(){
    // convert 8% into a decimal 
    let rate= 8 / 100;

    // calculate the interest using the compound interest formula
    // the question says use 4 years for the lenght of time 
    let interest = (1 + rate )** 4;

    // we can calculate how much our summer investment will mak 4 
    // year by multiplay the investment by interest 
    // we make about $3000 during the summer 
    let amount = 3000 * interest;

    // round the amount to 2 decimal places 
    // step 1 - multiplay by 10 ** 2
    amount = amount *10 ** 2
    //stop 2 - use Math.round 
    amount = Math.round(amount);
    //step 3 - divide by 10**2 
    amount = amount / 10 ** 2;

    // rounding in 1 line of code 
    amount = Math.round(amount * 10 ** 2) / 10 ** 2;


    alert(`the amount we would have in 4 year is $${amount}.`)
    alert(`the amount we would have in 4 year is $` + amount)
}

function calcReturnOnInvestment(){
    // calculate the return on investment (ROI) as a decimal
    let roi = ((1421 / 1000) - 1);
    // recalculate ROI as a percentage
    roi = roi * 100;

    P_ANSWERS.textContent = `Your ROI is ${roi}%.`;


}     