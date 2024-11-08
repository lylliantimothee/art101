// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 11/8/2024

// Constants

// Functions

function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

function anagram(string1, string2) {
  newString1 = string1.split('').sort().join('');
  newString2 = string2.split('').sort().join('');
  if (newString1 == newString2) {
    return true;
  }
  else {
    return false;
  }
}

// click listener for the button
$("#submit").click(function() {
  const userName = $("#username").val();
  // now let's sort it
  userNameSorted = sortString(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
