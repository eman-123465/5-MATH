`use strict`;

/*
Question 1
How hot is Tom Holland's hair?
a) It's fire (2 points)
b) It's nice (1 point)
c) Meh
d) Barf (-1 point)

Question 2
How would rate Tom Holland's performance in Spider-man?
a) I walked out (-1 point)
b) Boooo
c) Amazing (1 point)
d) Award-winning (2 points)

Question 3
What would you do on your first date with Tom Holland?
a) Dinner and a movie that they star in (2 points)
b) Make them pay for (-1 point)
c) Go on a random bus ride (4 points)
d) Coffee and a walk on the beach (3 points)
*/

// constants are to target the HTML page elements
const P_QUESTION = document.getElementById(`p-question`);
const BTN_A = document.getElementById(`btn-a`);
const BTN_B = document.getElementById(`btn-b`);
const BTN_C = document.getElementById(`btn-c`);
const BTN_D = document.getElementById(`btn-d`);

// keep track of which question the user is on
let questionCounter = 0;

// count how many points the user gets on the quiz
let score = 0;


/** Scores the user whenvever they click the first button (A) */

function checkButtonA(){
if (questionCounter == 0){
    score = score + 2;
}

// increasing the questionCounter will go to the next question 
questionCounter = questionCounter + 1;

}
// if user chooses B for question 1, increase score by 1 
function checkButtonB(){
    // if user chooses B for question 1, increase score by 1 
    if (questionCounter == 0)
        scoer = score + 1;
}


/**
 * This function decides which question the user is on, and 
 * changes the HTML to show that question.
 */
function chooseQuestion(){

    // choose the correct question to show the user
    if (questionCounter == 0){
        showQuestion1();
    }
    
}
/** Changes web page to show question 1 questions and answers */
function showQuestion1(){
    P_QUESTION.textContent = `How hot is Tom Holland's hair?`;
    BTN_A.textContent = `It's fire`;
    BTN_B.textContent = `It's nice`;
    BTN_C.textContent = `Meh`;
    BTN_D.textContent = `Barf`;
}

/** Begin the program. */
function start(){
    chooseQuestion();
}