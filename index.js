/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 21;
    if(votingAge > 18) {
        console.log('true');
    }
    if(votingAge < 18) {
        console.log('false');
    }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var kitty = Math.round(Math.random(0, 1));
    if(kitty === 1){
        console.log('maine coon')
    }
    // if(kitty = 0){
    else{
        console.log('russian blue')
    }




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log(Number('123'));



//Task d: Write a function to multiply a*b 
let a = 4;
let b = 3;
// function meow(meowMix) {
//     return a * b;
//   }
console.log(a*b);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let age = 28;
let dogYears = 7;
console.log("Wow, I'm " + age*dogYears + " years old in dog years.");




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

let dogWeight = 15;
// let dogAge = 1; 

// function dogFeed(resultMatch) {
//     if(resultMatch = dogWeight * 0.03) {
//         console.log("Your dog needs " + resultMatch + "lbs. of food.")
// }
// dogFeed(dogWeight);

function dogFeeder(resultMaybe){
    if(resultMaybe === 'X'){
        console.log("Your dog needs " + (dogWeight * 0.03) + " lbs of food.")
    }
}
dogFeeder('X')

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const rock = 0;
const paper = 1;
const scissors = 2;

// let 0 = rock;
// let 1 = paper;
// let 2 = scissors;

let playerinput = 1;// 1
let compyInput = Math.floor(Math.random() * 3);
if(compyInput === 0){
    console.log("Computer played rock. You played paper. You win!");
}
if(compyInput === 1){
    console.log("Computer played paper. You played paper. It's a tie!");
}
if(compyInput === 2){
    console.log("Computer played scissors. You played paper. The computer wins!");
}

// const compyArray = [
//     "rock",
//     "scissors",
//     "paper"
// ];
// var compySelection = compyArray[Math.floor(Math.random()*compyArray.length)];
// if(compySelection > playerinput){
//     console.log("The computer wins rock paper scissors! They played " + compySelection + " against your paper.");
// }
// if(compySelection === playerinput){
//     console.log("It's a tie! The computer played " + compySelection + " against your paper.");
// }
// if(compySelection < playerinput){
//     console.log("You won at rock paper scissors! The computer played " + compySelection + " against your paper.");
// }

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilometer = 5;
let miles = 0.621371;
console.log("5 km. converts to " + (kilometer * miles) + "mi.")
// answer: 3.10686 miles



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 5;
let centimeters = 30.48;
console.log("5 ft. converts to " + (feet * centimeters) + "cm.")
// answer: 152.4 cm.




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
// function annoyingSong()

for(let i = 99; i > 0; i--){
  console.log("There are " + i + " bottles of soda on the wall. " + i + " bottles of soda. Take one down, pass it around, " + (i-1) + " bottles of soda on the wall.");
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
let javaGrade = Math.floor(Math.random() * 101);
if(javaGrade >= 90 && javaGrade <= 101){
    console.log("You got " + javaGrade + " out of 100. You have an A.");
}
if(javaGrade >= 80 && javaGrade <= 90){
    console.log("You got " + javaGrade + " out of 100. You have a B.");
}
if(javaGrade >= 70 && javaGrade <= 80){
    console.log("You got " + javaGrade + " out of 100. You have a C.");
}
if(javaGrade >= 60 && javaGrade <= 70){
    console.log("You got " + javaGrade + " out of 100. You have a D.");
}
if(javaGrade >= 0 && javaGrade <= 60){
    console.log("You got " + javaGrade + " out of 100. You have a F.");
}

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

// const stretch = "Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels";
// var stretchA = stretch.includes("a", "e", "i", "o", "u","A", "E", "I", "O", "U");
// console.log(stretchA.length);


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

var stretch = prompt("Choose a number from 0-2. 0 being rock, 1 being paper, and 2 being scissors.");
console.log("Remainder: 0 being rock, 1 being paper, and 2 being scissors.You have entered " + stretch + " Your results are below.")

let compyInputB = Math.floor(Math.random() * 3);
console.log(compyInputB + " = where 0:rock, 1:paper, 2:scissors")

if(compyInputB <= stretch){
    console.log("Stretch - You win!");
}
if(compyInputB === stretch){
    console.log("Stretch - It's a tie!");
}
if(compyInputB >= stretch){
    console.log("Stretch - The computer wins!");
}