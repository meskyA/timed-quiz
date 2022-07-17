//selecting all required elements

var start_btn = document.querySelector(".start_btn");
var quiz_box= document.querySelector("#quiz_box");
var que_text = document.querySelector(".que_text");
var timer = document.querySelector(".timer");
var time_line = document.querySelector("header .time_line");
var time_text = document.querySelector(".timer .time_left_txt");
var timeCount = document.querySelector(".timer .timer_sec");
var option_list = document.querySelector(".option_list");
var next_btn = document.querySelector(".next_btn");
var result_box = document.querySelector(".result_box");
var score_areaEl = document.querySelector("#score_area");
var initialEl = document.querySelector("#initial");
var buttonDivEl = document.querySelector("#save_btn");
var high_scoreEl = document.querySelector("#high_scores");

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
start_btn.onclick = ()=>{
  quiz_box.classList.add("quiz_box"); 
}
function showQuestions() {
  var quiz_box = document.getElementById("quiz_box");
  if (quiz_box.style.display === "none") {
    quiz_box.style.display = "block";
  } else {
    quiz_box.style.display = "none";
  }
}