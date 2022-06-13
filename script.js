var startBtn = document.getElementById("startBtn");
var time = 75;
var time_remaining = true;
var time_start= false;
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("answer");    
var high_scores= [];
var output="";
 
var score = 0;
let i = 0;




var questions = [
  {
    title: "______ is the process of finding errors and fixing them with a program",
    choices: ["Fixing", "Debugging", "Scanning"],
    answer: "Debugging"
  },
  {
    title: "A loop that never ends is a ...?",
    choices: [
      "Continuous loop",
      "infinite loop",
      "for loop",
      "None of the above"
    ],
    answer: "for loop"
  },
  {
    title: "What does HTML stand for?",
    choices: ["Hyper Text Markup Leveler", "Hyper Text Marketing Language", "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Launguage"
  },
  {
    title: "WHich character ends a statement?",
    choices: [
      ",",
      "}",
      ";",
      "None of the above"
    ],
    answer: ";"
  },
  {
    title:
      "Which of the following is not a programming language?",
    choices: [
      "Python",
      "Java",
      "Assembly",
      "C++"
    ],
    answer: "Assembly"
  },
  {
    title: "What is the data type of variables in JavaScript?",
    choices: [
      "Object data types",
      "Function data type",
      "None of the above",
      "All of the above"
    ],
    answer: "Object data types"
  },
  

];



//SCORES

function StoreHighscores() {
    
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    })
  
    highscores.forEach(function(score) {

      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
      
    });
  }

  //SAVE HIGHSCORES TO LOCAL STORAGE

  function saveHighscore() {
  
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    
      var newScore = {
        score: time,
        initials: initials
      };
  
  
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      window.location.href = "points.html";
    }
  }
  
  submitBtn.onclick = saveHighscore;
    
  
  StoreHighscores();




