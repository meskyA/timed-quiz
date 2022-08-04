//selecting all required elements
var quiz_box= document.getElementById("quiz_box");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

// timer

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("htimeLeft");
var timesUp= document.getElementById("timesUp");

var timeCount = document.querySelector(".timer .timer_sec");
var  questionDiv = document.getElementById("questionDiv");
// var question = document.querySelector(".question");
var option_list = document.querySelector(".option_list");
var next_btn = document.querySelector(".next_btn");
var result_box = document.querySelector(".result_box");
var score_areaEl = document.querySelector("#score_area");

var buttonDivEl = document.querySelector("#save_btn");

var index = 0;

// option buttons
var option1 = document.getElementById("btn0");
var option2 = document.getElementById("btn1");
var option3 = document.getElementById("btn2");
var option4 = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

// Score section
var score = document.getElementById("score");
var highScores = document.getElementById("highScores");
var highScoreList = document.querySelector("highScoreList");
var goBackBtn = document.querySelector("goBackBtn");
var clearHighScoreBtn = document.querySelector("clearHighScoreBtn");

// Initials input
var submitInitials = document.getElementById("submitInitialsBtn");
var initials = document.getElementById("initials");
var summary = document.getElementById("summary");


var correctAnswer =0;
var numb = 0;
var scoreReault;
var questionIndex = 0;


let questions = [
  {
  numb: 1,
  question: "JavaScript was invented by _______________?",
  correctAnswer: "Brendan Eich",
  options: [
    "1. John Savage",
    "2. Joshus Henggins",
    "3. Brendan Eich",
    "4. Solomon Kibbs",
  ]
},
{
  numb: 2,
  question: "What is a function in JavaScript?",
  correctAnswer: "A set of code that performs a specific task",
  options: [
    "1. It is a function key used to coding",
    "2. A system to isolate and style an element",
    "3. A starter of JavaScript",
    "4. A set of code that performs a specific task",
  ]
},
{
  numb: 3,
  question: "Methods in JavaScript are _______________",
  correctAnswer: "Actions that can be performed on objects",
  options: [
    "1. Actions that can be performed on objects.",
    "2. A systematic plan.",
    "3. A complex way of performing a task",
    "4. A particular form of procedure for accomplishing something.",
  ]
},
{
  numb: 4,
  question: "What are the two ways to invoke a function?",
  correctAnswer: "Pass by value or pass by reference",
  options: [
    "1. By identifying with ID or class.",
    "2. Pass by value or pass by reference.",
    "3. By opening box and curly brackets.",
    "4. None of the above.",
  ]
},
{
  numb: 5,
  question: "Some of the most common uses of JavaScript are____?",
  correctAnswer: "All of the above.",
  options: [
    "1. Web development",
    "2. Web servers",
    "3. Web applications",
    "4. All of the above.",
  ]
},
];
var TotalTime = 120
function timedQuiz(){
  questionIndex =0;
  TotalTime = 120;
  timeLeft.textContent = TotalTime;
  initialInput.textContent = "";
   
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

showQuestions();
};

function showQuestions(index){
  nextQuestion();
}

function nextQuestion() {
  questions.textContent = questions[questionIndex].question;
  options.textContent = questions[questionIndex.options[0]];
  options.textContent = questions[questionIndex.options[1]];
  options.textContent = questions[questionIndex.options[2]];
  options.textContent = questions[questionIndex.options[3]];

}

function selectAnswer(answer){
  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

  if (questions[questionIndex].answer===questions[questionIndex].options[answer]) {
    // correct answer, add 1 point
    correctAnswer++;
    answerCheck.textContent ="correct!";
  } else {
    // for each wrong answer, take away 10 seconds from the timer
    TotalTime-= 10;
    timeLeft.textContent = TotalTime;
    answerCheck.textContent = "Wrong! The correct answer is: " + question[questionIndex].answer;
  }
  questionIndex++;
  // repeat for all the questions
  if( questionIndex < questions.length) {
    nextQuestion();
  } else {
    // when finished, run game over
    gameOver();
  }
}
function choose1() { selectAnswer[0];}
function choose2() { selectAnswer[1];}
function choose3() { selectAnswer[2];}
function choose4() { selectAnswer[3];}

// When timer is 0, it is game over!

function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";

  // show final score
  finalScore.textContent = correctAnswer;
}
// enter initail and store high score in local storage

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

  var saveHighScores = localStorage.getItem("High Scores");

  if (saveHighScores=== null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighScors)
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
option1.addEventListener("click", choose1);
option2.addEventListener("click", choose2);
option3.addEventListener("click", choose3);
option4.addEventListener("click", choose4);

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
})

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
