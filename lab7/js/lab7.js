// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 10/24/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function wisely() {
  userName = window.prompt("Your name please. I wish to fix its orientation.");
  console.log("Username = ", userName);

  nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

}

document.writeln("Name fixed now bye: ", sortUserName(), "</br>");

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
