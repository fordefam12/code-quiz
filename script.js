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
    correctAnswer: "arrayList[]",
  },
  {
    question:
      "3. What function to add an element at the begining of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: "push,unshift",
  },
  {
    question: "4. What will this output? let a = [1, 2, 3]; console.log(a[6]);",
    choices: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: "undefined",
  },
  {
    question:
      "5. What would following code return? console.log(typeof typeof 1);",
    choices: ["string", "number", "Syntax error", "undefined"],
    correctAnswer: "string",
  },
];
var hidden = false;
var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers;
var quizOver = false;
var iSelectedAnswer = [];
var c = quizTime / 2;
// var incorrect = [currentQuestion].choices;
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
var choiceList = document.querySelector(".choiceList");
const meesage = document.querySelector(".message");
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

  choiceList.innerHTML = "";
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
  correctAnswers = questions[currentQuestionIndex].correctAnswer;
}

function start() {
  showQuestions(currentQuestion);
  setTimer();
  start_btn.style.visibility = "hidden";
  // meesage.style.visibility = "hidden"
  
}
start_btn.addEventListener("click", start);

function setTimer() {
  var myTimer = setInterval(function () {
    quizTime--;
    timeCount.textContent = quizTime;
    if (quizTime <= 0) {
      clearInterval(myTimer);
    }
  }, 1000);
}

choiceList.addEventListener(
  "click",
  function (event) {
    event.target;
    if (event.target.matches("button")) {
      // if i pick the right answer
      if (event.target.textContent === correctAnswers) {
        score += 0;
        UserScores += 50;
        console.log(UserScores);
        console.log(correctAnswers);
        console.log(event.target);
        currentQuestion++;
        showQuestions(currentQuestion);

      } else {
        quizTime -= 10;
        currentQuestion++;
        showQuestions(currentQuestion);
      }
      if (quizTime < 0) {
        localStorage.setItem("time", quizTime);
        localStorage.setItem("score", UserScores);
        clearInterval(myTimer);
        alert("time is up");

      }
      if (event.target && correctAnswers === false) quizTime -= c;
      console.log(c);
      // console.log(incorrect);
return start;
    }
  },
  
);

// function nextQuestion() {
//   document.addEventListener("click", choiceList);
//   for (var i = 0; i < choices.length; i++) {
//     const choiceList = choices[i++];
//   }
// }

// function endOfQuiz() {
//   questionText.textContent = questions[currentQuestionIndex].question;
//   if (quizTime==0){
//     localStorage.setItem(UserScores)
//     localStorage
//     prompt="your score is " + UserScores;}
//     else if (currentQuestionIndex===currentQuestionIndex.legth) {
//       localStorage.setItem(UserScores)
//     prompt="your score is " + UserScores;}
//     }
  

