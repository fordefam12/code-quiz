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
let countdownInterval;
var queCount = 0;
var queNum = 1;
var UserScores = 0;
var countDown;
var counterLine;
var widthValue = 0;
var score = 0;
var quizTime = 60;
const start_btn = document.querySelector(".start");
var questionText = document.getElementById(`question`);
var choiceList = document.querySelector(".choiceList");
const meesage = document.querySelector(".message");
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
    } else if (currentQuestion == questions.length) {
      clearInterval(myTimer);
    }
  }, 1000);
}

choiceList.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    const selectedChoice = event.target.textContent;

    if (selectedChoice === correctAnswers) {
      UserScores += 50;
      console.log("User Scores:", UserScores);
    } else {
      quizTime -= 10;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestions(currentQuestion);
    } else {
      endQuiz();
    }
  }
});

function endQuiz() {
  clearInterval(countdownInterval);
  if (quizTime < 0) {
    localStorage.setItem("time", quizTime);
    localStorage.setItem("score", UserScores);
    alert("Time is up!");
  } else if (currentQuestion === questions.length) {
    const playerName = prompt("Enter your name:");
    if (playerName) {
      const highscore = {
        name: playerName,
        score: UserScores,
      };
      const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      highscores.push(highscore);

      localStorage.setItem("highscores", JSON.stringify(highscores));

      alert("Quiz complete. Your highscore has been recorded.");

      window.location.reload();
    } else {
      alert("Please enter a valid name.");
    }
  }
}

const viewHighscoresButton = document.getElementById("view");
const highscoresSection = document.getElementById("highscoresSection");
const highscoresList = document.getElementById("highscoresList");

function populateHighscores() {
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  highscores.sort((a, b) => b.score - a.score);

  highscores.forEach((highscore, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${highscore.name}: ${
      highscore.score
    }`;
    highscoresList.appendChild(listItem);
  });
}

viewHighscoresButton.addEventListener("click", function () {
  highscoresSection.classList.toggle("show-highscores");
  populateHighscores();
});
const clearHighscoresButton = document.getElementById("clear");

clearHighscoresButton.addEventListener("click", function () {
  highscoresList.innerHTML = "";

  localStorage.removeItem("highscores");
});
