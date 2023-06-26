var myQuestion = 0;
var veiwAnswers = 0;
var rightAnswers = 0;
var quizDone = false;
var myAnwer = [];
var c = 180;
var t;
var timeValue =15;
var queCount = 0;
var queNum = 1;
var UserScores= 0;
var countDown;
var counterLine;
var widthValue =0;


// var currentQuestion = 0;
// var grade = 0;

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
var countDownDate = new Date().getTime();
var timeLeft = countDownDate - now;
var days = math.floor(timeleft / (1000 * 60 * 60* 24));
var hours = math.floor((timeleft % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
var minutes = math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = math.floor((timeleft % (1000 * 60)) / 1000);
var myfunc =setInterval(function(){
		const d = new Date();
		document.getElementById("demo").innerHTML = d.toLocaleTimeString();
	   
},1000)
if (timeleft<0) {
	clearInterval(myfunc)
	document.getElementById("days")=""
	document.getElementById("hours")=""
	document.getElementById("minutes")=""
	document.getElementById("seconds")=""
	document

}


  const restartButton = document.getElementById("start-over");
  const clearHighSCores = document.getElementById("clear-highscores");
  const viewHighScores = document.getElementById("veiw-highscores");
  const startQuiz = document.getElementById("start");
  const goBack = document.getElementById("back");
  const submitScores = document.getElementById("submit");
  const UserScores = document.getElementById("user-score");
  const questionNum = document.getElementById("question-text");
  const trueBtn = document.getElementById("true");
  const falseBtn = document.getElementById("false");
  const choiceList =document.querySelector(".choiceList");
  const days =document.getElementById(days + "d");
  const hours =document.getElementById(hours + "h");
  const minutes =document.getElementById(minutes + "m");
  const seconds =document.getElementById(seconds + "s");
  // establish actions of the click of buttons

  restartButton.addEventListener("click", restart);
  clearHighSCores.addEventListener("click", clear - highscores);
  viewHighScores.addEventListener("click", view - highscores);
  submitScores.addEventListener("click", submit);
  startQuiz.addEventListener("click", start);
  goBack.addEventListener("click", back);
  submitScores.addEventListener("click", submit);

