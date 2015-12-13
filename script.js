$(document).ready(function(){

  $("#money").hover(function() {
		$(this).attr("src","money-hover.png");
  }, function() {
		$(this).attr("src","money.png");
  });

  var questions = [
    "(1/18) “It's freezing and snowing in New York. We need global warming!”",
    "(2/18) “They didn't sneak into this country to be your friends.”",
    "(3/18) “I don't have friends at NASA. Bunch of nerds.”",
    "(4/18) “Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.”",
    "(5/18) “I have a great relationship with the blacks.”",
    "(6/18) “They're building a wall to separate the US from the immigrants, which was my idea!”",
    "(7/18) “Dolphins, eskimos, who cares?”",
    "(8/18) “If you're worried about criticism, sometimes a diet is the best defense.”",
    "(9/18) “I like when a woman has ambition. It's like seeing a dog wearing clothes.”",
    "(10/18) “My fingers are long and beautiful, as it has been very well documented, are various other parts of my body.”",
    "(11/18) “Money can't buy happiness. It is happiness.”",
    "(12/18) “They're everywhere. They want to save the earth, but all they do is smoke pot and smell bad.”",
    "(13/18) “They had to put their cardboard box up for a second mortgage.”",
    "(14/18) “The woman is on vacation with her husband as we speak. Probably having beach sex. Which is the third best sex after elevator and White House.”",
    "(15/18) “My IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.”",
    "(16/18) “The concept of global warming was created by and for the Chinese”",
    "(17/18) “If that's a veiled criticism about me, I don't hear it and I won't respond to it.”",
    "(18/18) “Ladies and gentlemen, I am officially running for president of the United States.”",
    "You're a total farmer. I wanted to help; I really did. I called the concierge service with my American Express Invisible Card– there are no rental cars. The trains and buses are sold out. You're never leaving the farm."];
  var currentQuestion = 0;
  var incorrect = 0;
  var correct = 0;
  var nextQuestion = function ( event ) {
    $(".questionStyle").text(questions[currentQuestion]);
    currentQuestion += 1;
    $("#jack").off("click")
    $("#lucille").off("click")
    $("#cartman").off("click")
    $("#donald").off("click")


    if (currentQuestion == 1) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 2) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 3) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 4) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 5) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 6) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 7) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 8) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 9) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 10) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 11) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 12) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 13) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "toilet.png")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 14) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "toilet.png")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 15) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 16) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 17) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "toilet.png")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
    }

    if (currentQuestion == 18) {
      $("#jack").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }));
      $("#lucille").on("click", (function(){
        $("#lucille").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#cartman").on("click", (function(){
        $("#cartman").attr("src", "farmer.png")
        incorrect ++;
        console.log(incorrect, "incorrect")
      }))
      $("#donald").on("click", (function(){
        $("#donald").attr("src", "toilet.png")
      }))
    }

    if (currentQuestion == 18) {
      $("#money").on("click", (function(){
        $("#jack").attr("src", "farmer.png")
        $("#lucille").attr("src", "farmer.png")
        $("#cartman").attr("src", "farmer.png")
        $("#donald").attr("src", "farmer.png")
        $("html").css("background", "url(https://upload.wikimedia.org/wikipedia/commons/d/d4/Misty_field,_Telemark,_Norway.jpg) no-repeat center center fixed");
        $("#money").attr("src", "cow.png")
        $("#money").hover(function() {
          $(this).attr("src","cow.png");
        });
      }))
    }

  }

$("#money").on("click", nextQuestion);

$("#money").on("click", (function(){
  $("#jack").attr("src", "jack.png");
  $("#lucille").attr("src", "lucille.png");
  $("#cartman").attr("src", "cartman.png");
  $("#donald").attr("src", "donald.png");
}));

var topics = [
  "ON CLIMATE CHANGE:",
  "ON IMMIGRATION:",
  "ON CLIMATE CHANGE:",
  "ON FINANCE:",
  "ON RACE RELTIONS:",
  "ON IMMIGRATION:",
  "ON CLIMATE CHANGE:",
  "ON IMAGE:",
  "ON GENDER EQUALITY:",
  "ON IMAGE:",
  "ON FINANCE:",
  "ON LIBERALS:",
  "ON FINANCE:",
  "ON THE WHITE HOUSE:",
  "ON IMMIGRATION:",
  "ON CLIMATE CHANGE:",
  "ON IMAGE:",
  "ON THE WHITE HOUSE:",]
var currentTopic = 0;
var nextTopic = function ( event ) {
  if (currentTopic == 18) {
    topics.push("OOF. YOU HAD " + incorrect + " INCORRECT GUESSES.")
  };
  $(".topicStyle").text(topics[currentTopic]);
  currentTopic += 1;
}

$("#money").on("click", nextTopic)

});
