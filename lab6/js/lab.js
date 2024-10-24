// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 10/23/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

myTransport = [ "Bus", " Car", " Plane"];
myMainRide = {
  make: "Ford", 
  model: "Fairlane", 
  colour: "White", 
  year: 1958, 
  age: function () {
    return 2024 - this.year
  }
};

function main() {
  console.log("Main function started.");
  document.writeln("Getting around: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

  // the code that makes everything happen
}

// let's get this party started
main();
