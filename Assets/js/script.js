//selecting all required elements

var start_btn = document.querySelector(".start_btn button");
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
var high_scoreEl = document.querySelector("#high_scores")




// When Start Quiz button is clicked, the first question with options appear

start_btn.onclick = ()=>{
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(15); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
}

// Questions
//  JavaScript was invented by _______________
//   1. John Savage
//   2. Joshus Henggins
//   3. Brendan Eich
//   4. Solomon Kibbs

//   What is a function in JavaScript?
//   1. It is a function key used to coding
//   2. A system to isolate and style an element
//   3. A starter of JavaScript 
//   4. A set of code that performs a specific task 

//   JavaScript methods are _______________
//   1. Actions that can be performed on objects. 
  //   2. A systematic plan 
  // 3. A complex way of performing a task
  // 4. a particular form of procedure for accomplishing something
  
  //   What are the two ways to invoke a function?
//   1. By identifying with ID or class
//   2. Pass by value or pass by reference.
//   3. By opening box and curly brackets
//   4. None of the above.
// 
// 
// Some of the most common uses of JavaScript are
// 1. Web development.
// 2.  Web applications.
// 3. Web servers.
// 4. All of the.



