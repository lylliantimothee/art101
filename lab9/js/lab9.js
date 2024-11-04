// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 11/4/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#button-challenge").click(function() {
  $("#challenge").toggleClass("special");
  $("#button-challenge").toggleClass("normal")

});

$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#button-problems").click(function() {
  $("#problems").toggleClass("special");
  $("#button-problems").toggleClass("normal");

});

$("#reflection").append("<button id='button-reflection'>Make Special</button>");
$("#button-reflection").click(function() {
  $("#reflection").toggleClass("special");
  $("#button-reflection").toggleClass("normal");

});

$("#results").append("<button id='button-results'>Make Special</button>");
$("#button-results").click(function() {
  $("#results").toggleClass("special");
  $("#button-results").toggleClass("normal");

});

function defaultName() {

}

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
