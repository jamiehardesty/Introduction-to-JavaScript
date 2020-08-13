/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 21;
    if(votingAge > 18) {
        console.log('true');
    }
    else {
        console.log('false');
    }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var kitty = Math.round(Math.random(0, 1));
    if(kitty === 1){
        console.log('maine coon')
    }
    // if(kitty = 0){
    else {
        console.log('russian blue')
    }




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log(Number('123'));



//Task d: Write a function to multiply a*b 
// let a = 4;
// let b = 3;
// // function meow(meowMix) {
// //     return a * b;
// //   }
// console.log(a*b);
// don't do console!
// won't run in the browser
// need to write logic properly 
function multiply(a, b){
    return a * b;
}
console.log(multiply(3,4));
// this is how I should write the other questions !! 

// f(x) I can re-use that I won't!! Write them!!

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
// let age = 28;
// let dogYears = 7;
// console.log("Wow, I'm " + age*dogYears + " years old in dog years.");

// f(x) I can re-use that I won't!! Write them!!

function dogYears2(age){
    console.log("Wow, I'm " + age*7 + " years old in dog years.");
}
dogYears2(28);

// f(x) I can re-use that I won't!! Write them!!

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

// let dogWeight = 15;
// let dogAge = 1; 

// function dogFeed(resultMatch) {
//     if(resultMatch = dogWeight * 0.03) {
//         console.log("Your dog needs " + resultMatch + "lbs. of food.")
// }
// dogFeed(dogWeight);

//order matters
// function dogFeeder(dogWeight, adultPercent){
//     // if(resultMaybe === 'X'){
//         console.log("Your dog needs " + (dogWeight * adultPercent) + " lbs of food.")
//     }

// dogFeeder(15,0.03);

function dogFood(dogAge, dogWeight){
    if(dogAge >= 1){
        if(dogWeight <= 5){
            console.log(dogWeight*0.05);
        }
        else if(dogWeight > 5 && dogWeight <= 10){
            console.log(dogWeight*0.04);
        }
        else if(dogWeight > 10 && dogWeight <= 15){
            console.log(dogWeight *0.03);
        }
        else {
            console.log(dogWeight * 0.02);
        }
    }
    if(dogAge < 1){
        if(dogAge > .2 && dogAge <= .4){
            console.log(dogWeight*0.1);
        }
        else if(dogAge > .4 && dogAge <= .7){
            console.log(dogWeight*0.05);
        }
        else {
            console.log(dogWeight * 0.04);
        }
    }
}
dogFood(1,15);
// don't forget the && !!



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// let 0 = rock;
// let 1 = paper;
// let 2 = scissors;

// if computer input = 1 = rock 
// if input matches, tie

// let playerinput = 1;// 1 // make this a parameter 
// let compyInput = Math.floor(Math.random() * 2);
// if(compyInput === 0){
//     return 
//     console.log("For this task, the script is written to output paper. The randomized counter-play is rock. You win!");
// }
// if(compyInput === 1){
//     console.log("For this task, the script is written to output paper. The randomized counter-play is paper. It's a tie!");
// }
// else {
//     console.log("For this task, the script is written to output paper. The randomized counter-play is scissors. The computer wins!");
// }

function rockpaperscissors(string){
    if(string === "rock" || "paper" || "scissors"){
        let choice = Math.floor(Math.random() * 2);
        if(choice = 0){
            return "rock";
            console.log("The randomized counter-play is rock.");
        }
        if(choice = 1){
            return "paper";
            console.log("The randomized counter-play is paper.");
        }
        else {
            return "scissors";
            console.log("The randomized counter-play is scissors.");
        }
        // if(choice === 1){
        //     console.log("You won at rock, paper, scissors!");
        // }
        // else {
        //     console.log("You lost at rock, paper, scissors!");
        
    }
    if(string === "paper" && choice === "rock"){
        console.log("You win!")
    }
    if(string === "rock" && choice === "scissors"){
        console.log("You win!")
    }
    if(string === "scissors" && choice === "paper"){
        console.log("You win!")
    }
    if(string ===  choice){
        console.log("You tie! Whomp, Whomp!")
    }
    else {
        console.log("You lose!")
    }
}
rockpaperscissors("rock");


// Functions! 
// Not math / strings

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


function kilom(fivrr){
    return fivrr*0.621371;
}
console.log(kilom(5));


// testKilo = (kiloInput) => {
//     kiloInput * 0.621371;
// }

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = 5;
let centimeters = 30.48;
console.log("5 ft. converts to " + (feet * centimeters) + "cm.")
// answer: 152.4 cm.

function feets(cms){
    return cms*30.48;
}
console.log(feets(5));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
// function annoyingSong()

function annoyingSong(bottles){
    for(let i = bottles; i > 0; i--){
        console.log("There are " + i + " bottles of soda on the wall. " + i + " bottles of soda. Take one down, pass it around, " + (i-1) + " bottles of soda on the wall.");
      }
}
annoyingSong(99);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function javaGrade(randomize){
    if(randomize > 90 && randomize <= 101){
        console.log("You got " + randomize + " out of 100. You have an A.");
    }
    if(randomize > 80 && randomize <= 90){
        console.log("You got " + randomize + " out of 100. You have a B.");
    }
    if(randomize > 70 && randomize <= 80){
        console.log("You got " + randomize + " out of 100. You have a C.");
    }
    if(randomize > 60 && randomize <= 70){
        console.log("You got " + randomize + " out of 100. You have a D.");
    }
    else {
        console.log("You got " + randomize + " out of 100. You have a F.");
    }
}
javaGrade(Math.floor(Math.random() * 101));
    

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

// Pitfalls
// Equal sign abuse (using =, ==, === interchangeably)
// Thinking if(txt) && (txt) works
function properStretch(){
    popupInput = prompt("Let's play Rock, Paper, Scissors! Please enter rock, paper, or scissors below to designate your play");
    if(popupInput === 0) {
        popupInput = "rock";
        console.log("Stretch - You have entered 0 - rock");
    }
    if(popupInput === 1) {
        popupInput = "paper";
        console.log("Stretch - You have entered 1 - paper");
    }
    else {
        popupInput === "scissors";
        console.log("Stretch - You have entered 2 - scissors");
    }
    if(popupInput === "rock" || "paper" || "scissors"){
        let choice = Math.floor(Math.random() * 2);
        if(choice = 0){
            return "rock";
            console.log("The randomized counter-play is rock.");
        }
        if(choice = 1){
            return "paper";
            console.log("The randomized counter-play is paper.");
        }
        else {
            return "scissors";
            console.log("The randomized counter-play is scissors.");
        }
        }
    }
    if(popupInput === "paper" && choice === "rock"){
        console.log("You win!")
    }
    if(popupInput === "rock" && choice === "scissors"){
        console.log("You win!")
    }
    if(popupInput === "scissors" && choice === "paper"){
        console.log("You win!")
    }
    if(popupInput ===  choice){
        console.log("You tie! Whomp, Whomp!")
    }
    else {
        console.log("You lose!")
    }
properStretch();


// console.log("The computer has chosen " + compyInputB);

// if(stretchAAA == 0 && compyInputB == 1) {
//     console.log("Stretch - You've lost!")
// }
// if(stretchAAA == 0 && compyInputB == 2) {
//     console.log("Stretch - You've won!")
// }

// if(stretchAAA == 1 && compyInputB == 0) {
//     console.log("Stretch - You've won!")
// }
// if(stretchAAA == 1 && compyInputB == 2) {
//     console.log("Stretch - You've lost!")
// }

// if(stretchAAA == 2 && compyInputB == 0) {
//     console.log("Stretch - You've lost!")
// }
// if(stretchAAA == 2 && compyInputB == 1) {
//     console.log("Stretch - You've won!")
// }

// // if(compyInputB = "rock" && stretch = "rock"){
// //     console.log("Stretch - You win!");
// // }
// if(compyInputB == stretchAAA){
//     console.log("Stretch - It's a tie!");
// }
// if(compyInputB >= stretch){
//     console.log("Stretch - The computer wins!");
// }
        