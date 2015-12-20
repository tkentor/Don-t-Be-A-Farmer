function swapImages() {
  var $current = $(".money-swap input:visible");
  var $next = $current.next();
  if($next.length === 0) {
    $next = $(".money-swap input:first");
  }
  $current.hide();
  $next.show();
}

$(document).ready(function(){

  setInterval('swapImages()', 600);

  var questions = [
      { title: "", order: 0},
      { title: "(1/18) 'It's freezing and snowing in New York. We need global warming!'", order: 1, candidateID: "#donald" },
      { title: "(2/18) 'They didn't sneak into this country to be your friends.'", order: 2, candidateID: "#lucille" },
      { title: "(3/18) 'I don't have friends at NASA. Bunch of nerds.'", order: 3, candidateID: "#jack" },
      { title: "(4/18) 'Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.'", order: 4, candidateID: "#donald" },
      { title: "(5/18) 'I have a great relationship with the blacks.'", order: 5, candidateID: "#donald" },
      { title: "(6/18) 'They're building a wall to separate the US from the immigrants, which was my idea!'", order: 6, candidateID: "#cartman" },
      { title: "(7/18) 'Dolphins, eskimos, who cares?'", order: 7, candidateID: "#cartman" },
      { title: "(8/18) 'If you're worried about criticism, sometimes a diet is the best defense.'", order: 8, candidateID: "#lucille" },
      { title: "(9/18) 'I like when a woman has ambition. It's like seeing a dog wearing clothes.'", order: 9, candidateID: "#jack" },
      { title: "(10/18) 'My fingers are long and beautiful, as it has been very well documented, are various other parts of my body.'", order: 10, candidateID: "#donald" },
      { title: "(11/18) 'Money can't buy happiness. It is happiness.'", order: 11, candidateID: "#jack" },
      { title: "(12/18) 'They're everywhere. They want to save the earth, but all they do is smoke pot and smell bad.'", order: 12, candidateID: "#cartman" },
      { title: "(13/18) 'They had to put their cardboard box up for a second mortgage.'", order: 13, candidateID: "#cartman" },
      { title: "(14/18) 'The woman is on vacation with her husband as we speak. Probably having beach sex. Which is the third best sex after elevator and White House.'", order: 14, candidateID: "#jack" },
      { title: "(15/18) 'My IQ is one of the highest—and you all know it! Please don’t feel so stupid or insecure, it’s not your fault.'", order: 15, candidateID: "#donald" },
      { title: "(16/18) 'The concept of global warming was created by and for the Chinese'", order: 16, candidateID: "#donald" },
      { title: "(17/18) 'If that's a veiled criticism about me, I don't hear it and I won't respond to it.'", order: 17, candidateID: "#lucille" },
      { title: "(18/18) 'Ladies and gentlemen, I am officially running for president of the United States.'", order: 18, candidateID: "#donald" },
    ];
  var currentQuestionIndex = 0,
  currentQuestion = questions[0]
  incorrect = 0,
  correct = 0,
  incorrectImgSrc = "http://i.imgur.com/jIiAzBG.png",
  correctImgSrc = "http://i.imgur.com/7EJJG4N.png",
  candidates = [
      { id: "#jack", imgSrc: "http://i.imgur.com/zK6isje.png" },
      { id: "#lucille", imgSrc: "http://i.imgur.com/EByuseZ.png" },
      { id: "#cartman", imgSrc: "http://i.imgur.com/EvV1B0C.png" },
      { id: "#donald", imgSrc: "http://i.imgur.com/5v8dM2K.png" },
  ],
  topics = [
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
      "ON IMAGE:",
      "ON CLIMATE CHANGE:",
      "ON IMAGE:",
      "ON THE WHITE HOUSE:"
  ],
  currentTopicIndex = 0;

  var nextQuestion = function(e) {
    currentQuestionIndex += 1
    $(".questionStyle").text(currentQuestion.title);
    currentQuestion = questions[currentQuestionIndex];
  },
  resetCandidates = function() {
    for (var i=0; i < candidates.length; i++) {
      $(candidates[i].id).attr("src", candidates[i].imgSrc);
    }
  },
  nextTopic = function() {
//     if (currentTopicIndex == 17) {
// // currentTopicIndex hardcoded because length changes with previous function, and topic/background are then out of sync.
//       console.log("I'm like hey whats up hello")
//       $("html").css("background", "url(https://upload.wikimedia.org/wikipedia/commons/d/d4/Misty_field,_Telemark,_Norway.jpg) no-repeat center center fixed");
//       currentTopicIndex += 1;
//       currentTopic = topics[currentQuestionIndex];
//       $(".topicStyle").text(currentTopic);
//     } else
    if (currentTopicIndex == topics.length - 1) {
      topics.push("OOF. YOU HAD " + incorrect + " INCORRECT GUESSES.");
      questions.push({ title: "You're a total farmer. I wanted to help; I really did. I called the concierge service with my American Express Invisible Card– there are no rental cars. The trains and buses are sold out. You're never leaving the farm."});
      currentTopicIndex += 1;
      currentTopic = topics[currentQuestionIndex];
      $(".topicStyle").text(currentTopic);
      if (currentTopic == "OOF. YOU HAD " + incorrect + " INCORRECT GUESSES.") {
        $("html").css("background", "url(https://upload.wikimedia.org/wikipedia/commons/d/d4/Misty_field,_Telemark,_Norway.jpg) no-repeat center center fixed");
        console.log($(".candidate"))
        $("#lucille").attr("src", incorrectImgSrc)
        // for (var i = 0; i < $(".candidate").length; i++) {
        //   $($(".candidate")[i]).attr("src", incorrectImgSrc);
        }
    } else {
      $("#money-next").remove();
      currentTopicIndex += 1;
      currentTopic = topics[currentQuestionIndex];
      $(".topicStyle").text(currentTopic);
    }
  };

  $("body").on("click", '.candidate', function(e) {
    var candidateID = e.target.id,
    selectedCandidate = e.target;
    if (currentQuestion.candidateID == "#" + candidateID) {
      $(selectedCandidate).attr("src", correctImgSrc)
    } else {
      $(selectedCandidate).attr("src", incorrectImgSrc);
      incorrect += 1;
    }
  });

  $("body").on("click", ".money", function(e) {
      nextTopic();
      resetCandidates();
      nextQuestion();
    });
});
