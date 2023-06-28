var questions = [
  {
    question: "1. How do you write 'Hello World' in an alert box?",
    choices: [
      "msg('Hello World')",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
    ],
    correctAnswer: "alertBox('Hello World');",
  },
  {
    question: "2. How to empty an array in JavaScript?",
    choices: [
      "arrayList[]",
      "arrayList(0)",
      "arrayList.length=0",
      "arrayList.len(0)",
    ],
    correctAnswer: "arrayList(0)",
  },
  {
    question:
      "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1,
  },
  {
    question: "4. What will this output? let a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0,
  },
  {
    question:
      "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: 0,
  },
  {
    question: "6. Which software company developed JavaScript?",
    choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1,
  },
  {
    question: "7. What would be the result of 3+2+'7'?",
    choices: ["327", "12", "14", "57"],
    correctAnswer: 3,
  },
  {
    question:
      "8. Look at the following selector: $('div'). What does it select?",
    choices: [
      "The first div element",
      "The last div element",
      "All div elements",
      "Current div element",
    ],
    correctAnswer: 2,
  },
  {
    question: "9. How can a value be appended to an array?",
    options: [
      "arr(length).value;",
      "arr[arr.length]=value;",
      "arr[]=add(value);",
      "None of these",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
    choices: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0,
  },
];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
var c = 180;
var t;
var queCount = 0;
var queNum = 1;
var UserScores = 0;
var countDown;
var counterLine;
var widthValue = 0;
var score = 0;
var quizTime = 6;
//selecting all required elements
const start_btn = document.querySelector(".start");
var questionText = document.getElementById(`question`);
var choiceList = document.querySelector('.choiceList')
// const info_box = document.querySelector(".info_box");
// const exit_btn = info_box.querySelector(".buttons .quit");
// const nextQuestion = document.getElementById('nextQuestion');
// const quiz_box = document.querySelector(".quiz_box");
// const result_box = document.querySelector(".result_box");
// const option_list = document.querySelector(".option_list");
// const time_line = document.querySelector("header .time_line");
// const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer");

function showQuestions(currentQuestionIndex) {
  questionText.textContent = questions[currentQuestionIndex].question;
  choiceList.innerHTML=""
  var answerChoice1 = document.createElement("button");
  var answerChoice2 = document.createElement("button");
  var answerChoice3 = document.createElement("button");
  var answerChoice4 = document.createElement("button");

  answerChoice1.textContent = questions[currentQuestionIndex].choices[0];
  answerChoice2.textContent = questions[currentQuestionIndex].choices[1];
  answerChoice3.textContent = questions[currentQuestionIndex].choices[2];
  answerChoice4.textContent = questions[currentQuestionIndex].choices[3];

  choiceList.appendChild(answerChoice1);
  choiceList.appendChild(answerChoice2);
  choiceList.appendChild(answerChoice3);
  choiceList.appendChild(answerChoice4);
}

function start() {
  showQuestions(currentQuestion);
  setTimer();
  
}
start_btn.addEventListener("click", start);
// The data/time we want to countdown to

// Run myfunc every second
function setTimer() {
  var myTimer = setInterval(function () {
      quizTime--;
    timeCount.textContent= quizTime
    if (quizTime <= 0){
    clearInterval(myTimer);
    }
    console.log(quizTime);
  }, 1000);
}

choiceList.addEventListener("click", function (event) {
  event.target
  console.log(event.target);
  if (event.target.matches("button") ){
    // if i pick the right answer
    currentQuestion++ ;
    showQuestions(currentQuestion);
      // if i pick the right answer
      // else we subtract time
      currentQuestion++ ;
    showQuestions(currentQuestion);
  }
})




function nextQuestion() {
  document.addEventListener("click", choiceList);
  for (var i = 0; i < choices.length; i++) {
    const choiceList = choices[i++];
    
  }
}




// function endOfQuiz(sendMessage) {
//   if (quizTime==0){
//     localStorage.setItem()
//   }
// }