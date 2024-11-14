// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 11/13/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0 ) {
    return "Gryffindor";
  }
  else if (mod == 1 ) {
    return "Ravenclaw";
  }
  else if (mod == 2 ) {
    return "Slytherin";
  }
  else if (mod == 3 ) {
    return "Hufflepuff";
  }
}

$("#button").click(function() {
  let name = $("#input").val();
  let house = sortingHat(name);
  $("#output").html('<div id="thing"><p>The Sorting Hat has sorted you into ' + house + '!</p></div>');
});

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
