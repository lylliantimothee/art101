// index.js - purpose and description here
// Author: Lyllian Timothee
// Date: 

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.

function myFunction(param1, param2) {
  // some code here
  // return results;
}

let endpoint = "https://stand-by-me.herokuapp.com/api/v1/stands/1"

let ajaxConfig = {
                    // The URL for the request (from the api docs)
                    url: endpoint,
                    // The data to send (will be converted to a query string)
                    comicObj: {
                                  "id": "1",
                                  "name": "The World",
                                  "alternateName": "none",
                                  "japaneseName": "ザ・ワールド(世界)",
                                  "image": "theworld.png",
                                  "standUser": "2",
                                  "chapter": "Stardust Crusaders, Steel Ball Run",
                                  "abilities": "Time Stop, Super Speed, Super Strength",
                                  "battlecry": "MUDAMUDAMUDA"
                              },
                    // Whether this is a POST or GET request
                    type: "GET",
                    // The type of data we expect back
                    dataType : "json",
                    // What do we do when the api call is successful
                    //   all the action goes in here
                    success: function(comicObj) {
                        // do stuff
                        console.log(comicObj);
                        $("#output").append("<h3>Stands</h3>");
                        $("#output").append("<p>Number: " + comicObj.id + "</p>");
                        $("#output").append("<p>Name: " + comicObj.name + "</p>");
                        $("#output").append("<p>Alternate Name: " + comicObj.alternateName + "</p>");
                        $("#output").append("<p>Japanese Name: " + comicObj.japaneseName + "</p>");
                        $("#output").append("<p>Stand User: " + comicObj.standUser + "</p>");
                        $("#output").append("<p>Chapter: " + comicObj.chapter + "</p>");
                        $("#output").append("<p>Abilities: " + comicObj.abilities + "</p>");
                        $("#output").append("<p>Battle Cry!: " + comicObj.battlecry + " </p>");
                    },
                    // What we do if the api call fails
                    error: function (jqXHR, textStatus, errorThrown) { 
                        // do stuff
                        console.log("Error:", textStatus, errorThrown);
                    }
                  }

$.ajax(ajaxConfig);

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
