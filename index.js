/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
console.log(`--------#1 Warm-up--------`);
console.log(`Voting Age Check:`);
 const votingAge = 21;
 
 if(votingAge >= 18){
     console.log(`True`);
 }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

console.log(`Variable conditional:`);

let weather = `warm` ;
let temperature = 82;

if(temperature > 80){
    weather = `warm`;

}
else {
    weather = `cool`;
}

console.log(weather);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log('String to Number:');
const stringConvert = parseInt("1999",10);
console.log(stringConvert);


//Task d: Write a function to multiply a*b 

console.log(`Multiplication:`);
function multiply(a,b){
    console.log(a*b);
}

multiply(5,10);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

console.log(`--------#2 Dog Years--------`);
function dogYears(){
    const myAge = 32;
    console.log(myAge*7);
}

dogYears();



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
console.log(`--------#3 Dog Feeder--------`);

function dogFeeder(age,weight){
    

    if(age >= 1){
        //if adult (older than 1 year)
        if(weight <= 5){
            //if less or equal to 5lbs
            console.log(weight * .05);
        }
        else if(weight > 5 && weight <=10 ){
            //if 6-10lbs
            console.log(weight * .04);

        }
        else if(weight >= 11 && weight <= 15){
            //if 11-15lbs
            console.log(weight * .03);
        }
        else{
            //if over 15lbs
            console.log(weight * .02);
        }
        

    }  
    else {
        //if puppy (less than 1 year)
        if(age >= (2/12) && age < (4/12)){
            // 1f age is 2-4mos
            console.log(weight * .1);
        }
        else if(age >= (4/12) && age < (7/12)){
            //if age is 4-7mos
            console.log(weight * .05);
        }
        else if(age >= (7/12) && age < 1){
            //if age is 7-12mos
            console.log(weight * .04);
            
        }
        else if(age < (2/12)){
            console.log(`Please enter an age above 2 months`);
        }
        else {
            console.log(`error message?`);
        }
        
    } 
}
dogFeeder(1,15);


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number


   console.log(`--------#4 Rock Paper Scissors--------`);
/*
function RockPaperScissors(myChoiceString,computerChoiceString){
    

    function choiceStringToNum(choiceString){
        
    }


    if(myChoiceNum > computerChoiceNum){
        console.log('I win!');
    }
    else {
        console.log('Computer wins!');
    }
}

RockPaperScissors("rock","scissors");
*/


/*

ok rock paper scissors notes.

rock beats scissors
scissors beats paper
paper beats rock

1 rock
2 paper
3 scissors

1 beats 2
2 beats 3 
3 beats 1
same is tie

1, 2
1 wins

1,3
3 wins

2,3 
2 wins


if a = b then tied
*/


///////////////////////////////////// demo standup



// //input user choice of rock paper scissors

// function rockPaperScissors(userChoice){
// //generate a computer choice
//     console.log(`Key: Rock(1) Paper(2) Scissors(3)`);
//     let computerChoice = "(COMPUTER STRING IS WRONG)";

//     const computerChoiceNum = Math.floor(Math.random()*3) + 1;
//     //returns a random number btn 0 and 1
//     console.log(`Computer number: ${computerChoiceNum}`);

//     if(computerChoiceNum === 1){
//         ComputerChoice = `Rock`;
//         return `Rock`;
//     }
//     else if(computerChoiceNum === 2){
//         computerChoice = `Paper`;
//         return `Paper`;
//     }
//     else if(computerChoiceNum === 3){
//         computerChoice = `Scissors`;
//         return `Scissors`;
//     }

//     console.log(`Computer string: ${computerChoice}`);



//     var userChoiceNum = 0;
//     //assign userChoice to a number based on rock paper scissors
//     // 0.00-0.33, 0.34-0.66, 0.67-1.00

//     if(userChoice === `Rock`){
//         userChoiceNum = 1;
//         return 1;
//     }
//     else if(userChoice === `Paper`){
//         userChoiceNum = 2;
//         return 2;
//     }
//     else if(userChoice === `Scissors`){
//         userChoiceNum = 3;
//         return 3;
//     }
//     console.log(`user choice string: ${userChoice}`);
//     console.log(`user choice number: ${userChoiceNum}`);

// //assign numeric value to rock, paper and scissors

// //compare the numbers - comp vs your choice
// // tie: numbers are equal

// if(computerChoiceNum === userChoiceNum){
//     console.log(`Yay, a tie...`);



// }
// else if(computerChoiceNum === 3 && userChoice === 1){

// }

// else if(computerChoiceNum === 1 && userChoice === 3){

// }
// else if (computerChoiceNum < userChoiceNum){
//     console.log(`You LOSE!`);
// }
// else{
//     console.log(`You WIN!`);
// }
//     //check if 1 beats 3


//     //check both, larger # wins


// //define rules: 
// //    win/lose rule
// //    tie rule

// //translate it to a printout
// }


// rockPaperScissors(`scissors`);
// use the math.random as a dice roll, like a roll on a random table






//=============================
// Rock Paper Scissors: Try 2
//=============================

//  1. Input user choice (string)
//  2. Generate computer choice (number)
//  3. Convert user choice to number
//  4. Compare numbers
//      5. Rule: highest wins
//      6. Rule: except rock vs paper
//  7. Print Winner

//alternatively: use the math.random as a dice roll, like a roll on a random table


function rpsGame2(userString){
    //initialize userNum
    let userNum = 9000;
    
    //TEST PRINT USER CHOICES------
    // console.log(`Key: [1]Rock [2]Paper [3]Scissors`);

    // console.log(`userString: ${userString}`);
    // console.log(`userNum: ${userNum}`);
    //----------------------

    //assign number values to user choice string
    if(userString === `Rock`){
        userNum = 1;
        console.log(`[${userNum}] you chose rock...`);
    }else if(userString === `Paper`){
        userNum = 2;
        console.log(`[${userNum}] you chose paper...`);
    }
    else if(userString === `Scissors`){
        userNum = 3;
        console.log(`[${userNum}] you chose scissors...`);
    }
    else {
        console.log(`you chose... what?`);
    }

    //initialize computer num & string
    let compString = `COMP STRING IS WRONG`;
    let compNum = Math.floor(Math.random()*3)+1;

// is it random?
//    1 x16
//    2 x23
//    3 x18


    // Assign string to comp choice number
    if(compNum === 1){
        compString = `Rock`;
        console.log(`[${compNum}] comp chose rock...`);
    }
    else if(compNum === 2){
        compString = `Paper`;
        console.log(`[${compNum}] comp chose paper...`);
    }
    else if(compNum === 3){
        compString = 'Scissors';
        console.log(`[${compNum}] comp chose scissors...`);
    }
    else {
        console.log(`comp chose...what?`);
    }

    // TEST PRINT COMP CHOICES------
    // console.log(`compString: ${compString}`);
    // console.log(`compNum: ${compNum}`);
    //----------------------

    //Compare using rules

    if(userNum === compNum){
        console.log(`u:[${userNum}] c:[${compNum}] It's a tie...`);
    }
    else if(userNum === 1 && compNum === 3){
        console.log(`u:[${userNum}] c:[${compNum}] You win!`);
    }
    else if(userNum === 3 && compNum === 1){
        console.log(`u:[${userNum}] c:[${compNum}] You lose.`);
    }
    else if(userNum > compNum){
        console.log(`u:[${userNum}] c:[${compNum}] You win!`);
    }
    else if(compNum > userNum){
        console.log(`u:[${userNum}] c:[${compNum}] You lose.`);
    }
    else{
        console.log(`u:[${userNum}] c:[${compNum}] Outcome not defined...`);
    }


}

rpsGame2(`Rock`);


/************************************************************** Task 5 **************************************************************/
//Metric Converter

console.log('--------#5 Unit Converter--------');

//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

console.log(`KM to Miles:`);

function kmConvert(kmLength){
    console.log((kmLength/1.609).toFixed(3));
}
kmConvert(10);


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

console.log(`Feet to CM:`);
  
function ftConvert(ftLength){
    console.log((ftLength*30.48).toFixed(2));
}
ftConvert(7);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
console.log(`--------#6 Annoying Song--------`);

function annoyingSong(useri){

    for(i = useri; i > 0; i--) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down, pass it around, ${i-1} more bottles of soda on the wall.`);
    }
}

annoyingSong(7);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
console.log('--------#7 Task Grade Calculator--------');

function gradeCalculator(grade,gradeLetter){
    if(grade <= 100 && grade >= 90 ){
    gradeLetter = `A`;
    }
    else if(grade < 90 && grade >= 80){
        gradeLetter = `B`;
    }
    else if(grade < 80 && grade >= 70){
        gradeLetter = `C`;
    }
    else if(grade < 70 && grade >= 60){
        gradeLetter = `D`;
    }
    else {
        gradeLetter = `F`;
    }

    console.log(gradeLetter);
}
  
gradeCalculator(75);
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

//console.log('Stretch 1: Vowel Counter:');



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

//console.log('Stretch 2: Rock Paper Scissors Prompt:');



