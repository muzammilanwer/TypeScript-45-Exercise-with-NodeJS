var bowlerName = "amir";
var uppercaseName = "AMIR";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Banana", "Orange"];
// Test for equality and Inequality  with strings
console.log("Is Bowler is equal to amir?");
console.log(bowlerName == "amir");
console.log("\n Is Bowler Name is not equal to amir?");
console.log(bowlerName != "amir");
//Tests using Lowercase Function
console.log("\n Is AMIR is equal to amir after converting to lowercase?");
console.log(uppercaseName.toLowerCase() == "amir");
console.log("\n Is AMIR is not equal to amir after converting to lowercase?");
console.log(uppercaseName.toLowerCase() != "amir");
//Numerical Test
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than & Less than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);
//Greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10);
//Tests using "and" & "OR" Operators
//Using &&
console.log("\n twenty is not equal to 10 and twnety is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twnety is greater than 30?");
console.log(twenty != 10 && twenty > 30);
//Using || (OR)
console.log("\ntwenty is greater than 50 OR twnety is equal to 20?");
console.log(twenty > 50 || twenty == 20);
console.log("\ntwenty is greater than 50 OR twnety is not equal to 20?");
console.log(twenty > 50 || twenty != 20);
//Test Whether an item is include in array
console.log("\nIs Orange is include in my fruits array?");
console.log(fruits.includes("Orange"));
//Test Whether an item is not include in array
console.log("\nIs Orange not include in my fruits array?");
console.log(!fruits.includes("Orange"));
