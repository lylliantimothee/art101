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


$.ajax ({
                // The URL for the request (from the api docs)
                url: "*https://xkcd.com/614/info.0.json",
                // The data to send (will be converted to a query string)
                comicObj: {
                              "month": "7",
                              "num": 614,
                              "link": "",
                              "year": "2009",
                              "news": "",
                              "safe_title": "Woodpecker",
                              "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}",
                              "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?",
                              "img": "https://imgs.xkcd.com/comics/woodpecker.png",
                              "title": "Woodpecker",
                              "day": "24"
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
                    $("#output").append("<h3>" + comicObj.title + "</h3>" + "<img>" + comicObj.img + "</img>" + comicObj.alt);
                },
                // What we do if the api call fails
                error: function (jqXHR, textStatus, errorThrown) { 
                    // do stuff
                    console.log("Error:", textStatus, errorThrown);
                }
        })



function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
