
//selecting page elements

var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var questiontitleEl = document.querySelector("#question-title");
var divlist = document.querySelector("#begin");
var answerbtn = document.querySelector("#answer");
var nextbtn = document.querySelector('#next')
var currentQ = document.querySelector('#current');
let currentquestionindex


//question var

var currentquestion = 1 

//Questions

var questionsEl = [
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
    title: "What does || mean?",
    choices: [
      "And",
      "Or",
      "Equal to",
      "All of the above"
    ],
    answer: "Or"
  },
  

];



//add event listener to start quiz

//when start button is clicked questions will show

var startBtn = document.getElementById('start'); 

//Renders current question
function renderQuestion() {
  questionsEl.textContent = questionsEl[currentQ].title;
  for (i = 0; i < answersEl.children.length; i++) {
      answersEl.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQ].choices[i]}`;
  }
}


function setnextquestion() {
  showquestion(currentquestionindex)
  resetstate()
}


//TIMER

//start the timer

function startTimer(duration, display) {

  var timer = duration, minutes, seconds;

  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
      if(seconds === 0) {
          alert('Game Over!')
      }
  }, 1000);

}

//when start button is clicked the timer will start



startBtn.addEventListener("click", function() {
 

  
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

 


//SCORES

//Store scores in local storage
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




