// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 11/25/2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

$("#activate").click(function(){
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.chucknorris.io/jokes/random",
    // The data to send (will be converted to a query string)
    data: {
            "categories": ["dev"],
            "created_at": "2020-01-05 13:42:26.194739",
            "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
            "id": "4wgEVu5XTLW2uM99goHq6Q",
            "updated_at": "2020-01-05 13:42:26.194739",
            "url": "https://api.chucknorris.io/jokes/4wgEVu5XTLW2uM99goHq6Q",
            "value": "When Chuck Norris air guitars, you can hear it playing."
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //    all the action goes in here
    success: function(data) {
      // do stuff
      console.log(data);
      $("#output").html("<h3>Output: </h3> <pre>" + JSON.stringify(data, null, 4) + "</pre>");
    },
    // What we do if the api cal fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:" , textStatus, errorThrown);
    }
  })
})

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
