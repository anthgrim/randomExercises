let paramArray = ['a',7,'c'];

const isString = (array) => {
    for(let i = 0; i < array.length;i++){
        if(typeof(array[i]) !== 'string'){
            return 'not strings';
            break;
        }
    }
    return 'strings';
}

function arrayFlattener(pArray){
    let odArray = [];
    //Get the second dimension flat
    for(let i = 0; i < pArray.length; i++){
        if(pArray[i].length > 1){
            for(let j = 0; j < pArray[i].length; j++){
                odArray.push(pArray[i][j]);
            }
            //Evaluate if the recently added elements have more than one dimension each
            for(let k = 0; k < odArray.length; k ++){
                if(odArray[k].length > 1){
                    odArray = arrayFlattener(odArray)
                }
            }
        }else{
            odArray.push(pArray[i]);
        }
    }
    return odArray;
}

// ********************** Exercise 1 STARTS HERE **********************
// Get the sum of two arrays...actually the sum of all their elements. 
// P.S. Each array includes only integer numbers. 
// Example input arrays:
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 627 
function sumArrays(arr1, arr2){
    const sum1 = arr1.reduce((prevVal, currVal) => 
        prevVal + currVal);

    const sum2 = arr2.reduce((prevVal, currVal) => 
    prevVal + currVal);

    return sum1 + sum2;
}

// ********************** Exercise 2 STARTS HERE **********************
// Using a for loop print all even numbers up to and including n. Don’t include 0.  
let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// *********** YOUR CODE HERE **********************
function getEvenNumbers(n){
    let row = '';
    for(let i = 1; i <= n; i++){
        if(i % 2 == 0){
            row += i + " ";
        }
    }
    return row;
}

// ********************** Exercise 3 STARTS HERE **********************
// Using a for loop output the elements in reverse order 
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3  be  false cannot  true 9 what 43 OR each item on a new line

// *********** YOUR CODE HERE **********************
function reverseArray(pArray) {
    let revArray = []; //New Array
    let lastPos = pArray.length - 1; //Last Position
    for(let i = lastPos; i >= 0; i--){
        revArray.push(pArray[i]);
    }
    return revArray;
}

// ********************** Exercise 4 STARTS HERE **********************
// Given two arrays of integers. Add up each element in the same position and create a new array 
//containing the sum of each pair. Assume both arrays are of the same length. 
let arr_3   = [4, 6, 7];
let arr_4	= [8, 1, 9];
// Example output: 
// [12, 7, 16]

// *********** YOUR CODE HERE **********************
function sumPairs(arr1,arr2){
    let sumArr = [];
    for(let i = 0; i < arr1.length; i++){
        sumArr.push(arr1[i] + arr2[i]);
    }
    return sumArr;
}

// ********************** Exercise 5 STARTS HERE **********************
// Given a string change the every second letter to an uppercase  ‘Z’. 
//Assume there are no space. 
let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line

// *********** YOUR CODE HERE **********************
function addUpZ(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) % 2 !== 0){
            newStr += "Z";
        }else{
            newStr += str[i];
        }
    }
    return newStr;
}

// ********************** Exercise 6 STARTS HERE **********************
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not. 
let str2 = "don’t know why";
// Example output: 
// “yes” 

// *********** YOUR CODE HERE **********************
function containsY(str){
    let hasY = "no";
    for(let i = 0; i < str.length; i++){
        if(str[i] === "y"){
            hasY = "yes";
        }
    }
    return hasY;
}

// ********************** Exercise 7 STARTS HERE **********************
// Given a number n Calculate the factorial of the number 
let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

// *********** YOUR CODE HERE **********************
function getFactorial(n){
    let factorial = 1;
    for(let i = n; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

// ********************** Exercise 8 STARTS HERE **********************
// Write a program that will allow someone to guess a four digit pin exactly 4 times. 
//If the user guesses the number correctly. It prints  “That was correct!” 
//Otherwise it will print “Sorry that was wrong.” 
//Program stops after the 4th attempt of if they got it right. 
let pin = 0704;
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!

// *********** YOUR CODE HERE **********************
function verifyPin(){
    for(let i = 1; i <= 4; i++){
        let userInput = parseInt(prompt("Please make your guess"));
        if(userInput == pin){
            console.log("That was correct!")
            break;
        }else{
            console.log("Sorry that was wrong");
        }
    }
}

// ********************** Exercise 9 STARTS HERE **********************
// Write a program that will check if two strings are palindromes. 
//A palindrome is a word that spells the same forward and backward. 
// Palindrome: a word, phrase, or sequence that reads the same backward as forward, 
//e.g., madam or nurses run.
let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 

// *********** YOUR CODE HERE **********************
function isPolindrome(str){
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    if(str == newStr){
        return "Yes"
    }else{
        return "No"
    }
}

// ********************** Exercise 10 STARTS HERE **********************
// This is a code wars kata. click here to train on “Grasshopper – Summation” on code wars.
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
let num1 = 2; 
let num2 = 8; 
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 

// *********** YOUR CODE HERE **********************
function sumUpTo(num){
    let result = 0;
    for(let i = 1; i <= num; i++){
        result += i;
    }
    return result;
}