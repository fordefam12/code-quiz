var myQuestion = 0;
var veiwAnswers = 0;
var rightAnswers = 0;
var quizDone = false;
var myAnwer = [];
var c = 180;
var t;
var queCount = 0;
var queNum = 1;
var UserScores= 0;
var countDown;
var counterLine;
var widthValue =0;
var currentQuestion = 0;
var grade = 0;

var questions = [
  {
    question: "1.is coding fun ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correctAnswers: 1,
  },
  {
    question: "2.whast your favorite movie ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correctAnswers: 1,
  },
  {
    question: "3. forvaorite vacation ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correctAnswers: 1,
  },
  {
    question: "are you a coder ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correctAnswers: 1,
  },
  {
    question: "5.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correctAnswers: 1,
  },
];

 // The data/time we want to countdown to
 var countDownDate = new Date("Jul 25, 2023 00:00:52").getTime();
    
 // Run myfunc every second
 var myfunc = setInterval(function() {
 var now = new Date().getTime();
 var timeValue = countDownDate - now;
	
 // Calculating the days, hours, minutes and seconds left
//  var days = Math.floor(timeValue / (10000 * 6000 * 6000 * 24));
//  var hours = Math.floor((timeValue % (100 * 60 * 60 * 24)) / (10000 * 60 * 60));
//  var minutes = Math.floor((timeValue % (10 * 60 * 60)) / (10000 * 60));
//  var seconds = Math.floor((timeValue % (1080 * 60)) / 1000);
var days = Math.floor(timeValue / (10000 * 6000 * 6000 * 24));
var hours = Math.floor((timeValue % (100 * 60 * 60 * 24)) / (10000 * 60 * 60));
var minutes = Math.floor((timeValue % (10 * 60 * 60)) / (10000 * 60));
var seconds = Math.floor((timeValue % (110 * 60)) / 1000);
 // Result is output to the specific element
 document.getElementById("days").innerHTML = days + "d "
 document.getElementById("hours").innerHTML = hours + "h " 
 document.getElementById("mins").innerHTML = minutes + "m " 
 document.getElementById("secs").innerHTML = seconds + "s " 
	
 // Display the message when countdown is over
 if (timeValue < 0) {
	clearInterval(myfunc);
	document.getElementById("days").innerHTML = ""
	document.getElementById("hours").innerHTML = "" 
	document.getElementById("mins").innerHTML = ""
	document.getElementById("secs").innerHTML = ""
	document.getElementById("end").innerHTML = "TIME UP!!";
 }
 if (timeValue< 0){
	
 }
 
 }, 1000);

//  console.log( countDownDate);


// const restartButton = document.getElementById("start-over");
//   const clearHighSCores = document.getElementById("clear-highscores");
//   const viewHighScores = document.getElementById("veiw-highscores");
//   const startQuiz = document.getElementById("start");
//   const goBack = document.getElementById("back");
//   const submitScores = document.getElementById("submit");
// //   const UserScores = document.getElementById("user-score");
//   const questionNum = document.getElementById("question_text");
//   const trueBtn = document.getElementById("true");
//   const falseBtn = document.getElementById("false");
//   const choiceList =document.querySelector(".choiceList");
  
//   // establish actions of the click of buttons

//   restartButton.addEventListener("click", restart);
//   clearHighSCores.addEventListener("click", clear - highscores);
//   viewHighScores.addEventListener("click", view - highscores);
//   submitScores.addEventListener("click", submit);
//   startQuiz.addEventListener("click", start);
//   goBack.addEventListener("click", back);
//   submitScores.addEventListener("click", submit);
