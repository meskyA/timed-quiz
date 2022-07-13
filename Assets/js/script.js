//selecting all required elements
var startButton = document.querySelector(".start-button");
var timer= document.querySelector("#timeshow");
var question= document.querySelector(".question");
var quizMessage= document.querySelector(".quizMessage");
var result= document.querySelector(".result");
var preButton= document.querySelector(".preButton"); 
var nestButton= document.querySelector(".nextButton");
    
// Timer countdown after starting the quiz
// function startQuiz() {

//     var start_btn = startButton ();
//     var startText = document.querySelector(".start-button");
//     startText.value = start_btn;
//     console.log(startButton());
  
    startButton.on('click', function() {
        console.log('click');
      });