// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 10/30/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

// Array definition and assignment
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array: ", array);
document.writeln("Array: " + array + "<br>");
// Messy function to square elements of array
function messy(x) {
  var results = x * x;
  return results;
}

// .map applies Messy function to elements of array
let mapResults = array.map(messy);
console.log("Array Elements Squared: ", mapResults);
document.writeln("Array Elements Squared: " + mapResults + "<br>");

// Variable evenEven holds the values of array.map(anonfunction)
let evenEven = array.map(function (x) {
  return (x % 2 == 0);
})
console.log("Anon Function i.e. Even Verification: ", evenEven);
document.writeln("Results: " + evenEven);

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
