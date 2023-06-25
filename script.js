var myQuestion=0;
var veiwAnswers=0;
var rightAnswers=0;
var quizDone=false;
var myAnwer=[];
var c=180;
var t;


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
$(document).ready(function()
{
displayMyQuestion();
$(this).find(".quizmessage").hide();
$(this).find(".goBack").attr('disabled', 'disabled');
timecount();
$(this).find(".goBack").attr('hide', 'hide');
        if(quizDone===false)
        {
            if(myQuestion==0) {return false;}
            if(myQuestion==1) {$("goBack").attr('hide', 'hide');
        }
        
        }
}

// function startTest() {
//   currentQuestion = 0;
//   questionNum.innerHTML = questions[currentQuestion].question;
//   // change button  name goBack.
//   trueBtn.innHTML = questions[currentQuestion].answers[0].option;
//   trueBtn.onclick = () => {
//     var ano = 0;
//     if (questions[currentQuestion].answers[ano].answer) {
//       if (grade < 3) {
//         score++;
//       }
//     }
//     UserScores.innerHTML = score;
//     if (currentQuestion < 2) {
//       next();
//     }
//   };
// }
// falseBtn.HTML = questions[currentQuestion].answers[1].option;
// falseBtn.onclick = () => {
//   var ano = 1;
//   if (questions[currentQuestion].answers[ano].answer) {
//     if (grade < 3) {
//       score++;
//     }
//   }
//   goBack.classList.add("hide");
// };
// startQuiz();

// function restart() {
//   currentQuestion = 0;
//   goBack.classList.remove("hide");
//   trueBtn.classList.remove("hide");
//   falseBtn.classList.remove("hide");
//   clearHighSCores.classList.remove("hide");
//   submitScores.classList.remove("hide");
//   startQuiz.classList.remove("hide");
//   score = 0;
//   UserScores.innerHTML = score;
//   startQuiz();
// }





// // establish button functions
// const restartButton = document.getElementById("start-over");
// const clearHighSCores = document.getElementById("clear-highscores");
// const viewHighScores = document.getElementById("veiw-highscores");
// const startQuiz = document.getElementById("start");
// const goBack = document.getElementById("back");
// const submitScores = document.getElementById("submit");
// const UserScores = document.getElementById("user-score");
// const questionNum = document.getElementById("question-text");
// const trueBtn = document.getElementById("true");
// const falseBtn = document.getElementById("false");

// // establish actions of the click of buttons

// restartButton.addEventListener("click", restart);
// clearHighSCores.addEventListener("click", clear - highscores);
// viewHighScores.addEventListener("click", view - highscores);
// submitScores.addEventListener("click", submit);
// startQuiz.addEventListener("click", start);
// goBack.addEventListener("click", back);
// submitScores.addEventListener("click", submit);}