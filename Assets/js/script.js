// 
// var next_btn = document.querySelector(".next_btn");
// var result_box = document.querySelector(".result_box");

// var score_areaEl = document.querySelector("#score_area");
// var timeCount = document.querySelector(".timer .timer_sec");
// var buttonDivEl = document.querySelector("#save_btn");


// selecting all required elements

//  Start Button 

var quiz_box= document.getElementById("quiz_box");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");


// timer

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp= document.getElementById("timesUp");

// Questions

var  questionDiv = document.getElementById("questionDiv");
var questionLead= document.getElementById("questionLead");

// option buttons
var options = document.getElementById("options");
var options1 = document.getElementById("btn0");
var options2 = document.getElementById("btn1");
var options3 = document.getElementById("btn2");
var options4 = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");
// var option_list = document.querySelector(".option_list");

// Score section
var score = document.getElementById("score");
var highScores = document.getElementById("highScores");
var highScoreList = document.getElementById("highScoreList");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var goBackBtn = document.getElementById("goBackBtn");

// Initials input
var submitInitialsBtn = document.getElementById("submitInitialsBtn");
var initials = document.getElementById("initials")
var summary = document.getElementById("summary");


var correctAns =0;
var numb = 0;
var scoreReault;
var questionIndex = 0;

var index = 0;


const questions = [
  {
  numb: 1,
  question: "JavaScript was invented by _______________?",
  correctAnswer: "Brendan Eich",
  options: [
    "John Savage",
    "Joshus Henggins",
    "Brendan Eich",
    "Solomon Kibbs",
  ]
},
{
  numb: 2,
  question: "What is a function in JavaScript?",
  correctAnswer: "A set of code that performs a specific task",
  options: [
    "It is a function key used to coding",
    "A system to isolate and style an element",
    "A starter of JavaScript",
    "A set of code that performs a specific task",
  ]
},
{
  numb: 3,
  question: "Methods in JavaScript are _______________",
  correctAnswer: "Actions that can be performed on objects",
  options: [
    "Actions that can be performed on objects.",
    "A systematic plan.",
    "A complex way of performing a task",
    "A particular form of procedure for accomplishing something.",
  ]
},
{
  numb: 4,
  question: "What are the two ways to invoke a function?",
  correctAnswer: "Pass by value or pass by reference",
  options: [
    "By identifying with ID or class.",
    "Pass by value or pass by reference.",
    "By opening box and curly brackets.",
    "None of the above.",
  ]
},
{
  numb: 5,
  question: "Some of the most common uses of JavaScript are____?",
  correctAnswer: "All of the above.",
  options: [
    "Web development",
    "Web servers",
    " Web applications",
    "All of the above.",
  ]
},
];

// Start timer at the click of start button
var TotalTime = 120
function timedQuiz(){
  questionIndex =0;
  TotalTime = 120;
  timeLeft.textContent = TotalTime;
  initials.textContent = "";
   
  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";


  var startTimer = setInterval(function(){
    TotalTime--;
    timeLeft.textContent = TotalTime;
    if(TotalTime <= 0) {
      clearInterval(startTimer);
      if(questionIndex < questions.length -1) {
        gameOver();
      }
    }
  }, 1000);

showQuiz();
};

function showQuiz(){
  nextQuestion();
}

function nextQuestion() {
  questionLead.textContent = questions[questionIndex].question;
  options1.textContent = questions[questionIndex].options[0];
  options2.textContent = questions[questionIndex].options[1];
  options3.textContent = questions[questionIndex].options[2];
  options4.textContent = questions[questionIndex].options[3];

}
// show correct or wrong after option is selected

function selectAnswer(correctAnswer){
  // debugger
  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

  if (questions[questionIndex].correctAnswer===correctAnswer) {
    // correct answer, add 1 point
    correctAns++;
    // console.log(correctAns);
    answerCheck.textContent ="correct!";
  } else {
    // for each wrong answer, take away 10 seconds from the timer
    TotalTime-= 10;
    timeLeft.textContent = TotalTime;
    answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].correctAnswer;
  }
  // setTimeout()
  questionIndex++;
  // repeat for all the questions
  if( questionIndex < questions.length) {
    nextQuestion();
  } else {
    // when finished, run game over
    gameOver();
  }
}
function choose1(event) { selectAnswer(event.target.textContent);}
function choose2(event) { selectAnswer(event.target.textContent);}
function choose3(event) { selectAnswer(event.target.textContent);}
function choose4(event) { selectAnswer(event.target.textContent);}

// When timer is 0, it is game over!

function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";
  initials.style.display = "block";

  // show final score
  finalScore.textContent = correctAns;
  storeHighScores();
}
// enter initial and store high score in local storage

function storeHighScores(event) {
  event.preventDefault();

  // initial input is blank
  if (initialInput.value ==="") {
    alert("Enter your initials here");
    return;
  }

  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScores.style.display = "block";

  // scores stored in local storage

  var savedHighScores = localStorage.getItem("High Scores");

  if (savedHighScores=== null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighScores)
  }
  var userScore = {
    initials: initialInput.value,
    score: finalScore.textContent
  }
  console.log(userScore);
  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  // show high scores

  showHighScores();
}

var i = 0;
function showHighScores(){
  startDiv.style.display = "none";
  timer.style.display= "none";
  questionDiv.style.display = "none";
  summary.style.display = "none";
  highScores.style.display = "block";

  var savedHighScors = localStorage.getItem("high scores");

  if(savedHighScors=== null) {
    return;
  }
  console.log(savedHighScors);

  var storedHighScores = JSON.parse(savedHighScors);

  for (; i < storedHighScores.length; i++) {
    var eachNewHighScore = document.createElement ("p");
    eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;

  }
}

// Event Listener "click" to all buttons

startQuizBtn.addEventListener('click', timedQuiz);
options1.addEventListener("click", choose1);
options2.addEventListener("click", choose2);
options3.addEventListener("click", choose3);
options4.addEventListener("click", choose4);

submitInitialsBtn.addEventListener("click", function(event){
  storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event){
  showHighScores(event);
})

goBackBtn.addEventListener("click", function(){
  startDiv.style.display = "block";
  highScores.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
  window.localStorage.removeItem("high scores");
  listofHighScores.innerHTML = "High Scores Cleared";
  listofHighScores.setAttritute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});

// quiz_box.classList.add("quiz_box"); 
// function init() {
//   var quiz_box = document.getElementById("quiz_box");
//   quiz_box.classList.add("quiz_box"); 
//   if (quiz_box.style.display === "none") {
//     quiz_box.style.display = "block";
//     showQuestions(index);
//   } else {
//     quiz_box.style.display = "none";
//  }
// }


// const question = document.querySelector(".question");
// // var button = document.querySelector(".next_btn");
// //creating a new span and div tag for question and option and passing the value using array index
// let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
// let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
// + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
// + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
// + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
// // + '<div class = "next_btn"><button>'+button.next_btn+'</button></div>';
// question.innerHTML = que_tag; 
// option_list.innerHTML = option_tag;

// next_btn.addEventListener('click', button);
// function button() {
//   document.querySelector(".next_btn").innerHTML="Next";

// }
// options.addEventListener("click", function(){
//   index++
//   showQuestions(index)
// })

// option.addEventListener("click, function"() {
//   selectAnswer(_option);
// });
// const next_btn = document.querySelector(".next_btn"); 
// option[1].addEventListener("click", function(){
//   selectOption(option[1].textContent);
// });
// option[2].addEventListener("click", function(){
//   selectOption(option[2].textContent);
// });
// option[3].addEventListener("click", function(){
//   selectOption(option[3].textContent);
// });
// option[4].addEventListener("click", function(){
//   selectOption(option[4].textContent);
// });
// var nextQuestion = nextQuestion();

// function nextQuestion(){
//   var currentQuestion = questions[currentQuestionIndex];
//   questionElement.textContent = currentQuestion.question;
//   option[1].textContent = quextion [currentQuestionIndex].option[1];
//   option[2].textContent = quextion [currentQuestionIndex].option[2];
//   option[3].textContent = quextion [currentQuestionIndex].option[3];
//   option[4].textContent = quextion [currentQuestionIndex].option[4];
//   }

//   function selectAnswer(selectAnswer){
//     var correctAnswer = question [currentQuestionIndex].correctAnswer;
//     if (selectAnswer===correctAnswer) {
//       alert ("Correct!");
// } else {
//   alert ("Wrong!");
// }
//   }
// nextQuestion();
