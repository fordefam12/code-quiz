var myQuestion = 0;
var veiwAnswers = 0;
var rightAnswers = 0;
var quizDone = false;
var answers = [];
var c = 180;
var t;
var queCount = 0;
var queNum = 1;
var userScoress = 0;
var countDown;
var counterLine;
var widthValue = 0;
var currentQuestionIndex = 0;
var score= 0;
var questionText = document.getElementById("question_text")
var choiceList= document.querySelector(".choiceList")

var questions = [
  {
    question: "1.is coding fun ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correctAnswers: "yes",
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

questionText.textContent=questions[currentQuestionIndex].question
var answerChoice1 = document.createElement("button");
var answerChoice2 = document.createElement("button");
var answerChoice3 = document.createElement("button");
var answerChoice4 = document.createElement("button");

answerChoice1.textContent=questions[currentQuestionIndex].answers[0];
answerChoice2.textContent=questions[currentQuestionIndex].answers[1];
answerChoice3.textContent=questions[currentQuestionIndex].answers[2];
answerChoice4.textContent=questions[currentQuestionIndex].answers[3];

choiceList.appendChild(answerChoice1);
choiceList.appendChild(answerChoice2);
choiceList.appendChild(answerChoice3);
choiceList.appendChild(answerChoice4);

choiceList.addEventListener("click", function(event){

var element =event.target;

if (element.matches("button")){
  console.log(event.target.textContent);
  currentQuestionIndex++
  console.log(currentQuestionIndex);
}

})





// The data/time we want to countdown to
var countDownDate = new Date("Jul 25, 2023 00:00:52").getTime()
// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeValue = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  //  var days = Math.floor(timeValue / (10000 * 6000 * 6000 * 24));
  //  var hours = Math.floor((timeValue % (100 * 60 * 60 * 24)) / (10000 * 60 * 60));
  //  var minutes = Math.floor((timeValue % (10 * 60 * 60)) / (10000 * 60));
  //  var seconds = Math.floor((timeValue % (1080 * 60)) / 1000);
  var days = Math.floor(timeValue / (10000 * 6000 * 6000 * 24));
  var hours = Math.floor(
    (timeValue % (100 * 60 * 60 * 24)) / (10000 * 60 * 60)
  );
  var minutes = Math.floor((timeValue % (10 * 60 * 60)) / (10000 * 60));
  var seconds = Math.floor((timeValue % (110 * 60)) / 1000);
  // Result is output to the specific element
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m ";
  document.getElementById("secs").innerHTML = seconds + "s ";

  // Display the message when countdown is over
  if (timeValue === 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME UP!!";
  }

  // punimnet for incorrect answers
  // if (count > 0) {
  //   count--;
  //   counter.textContent = count;
  //   localStorage.setItem("count", count);
  // }
}, 1000);

  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }

//  console.log( countDownDate);
// const start_btn = document.querySelector(".start");
// const message = document.querySelector(".message");
// const exit_btn = message.querySelector(".buttons .quit");
// const continue_btn = message.querySelector(".buttons .restart");
// const quiz_box = document.querySelector(".quiz_box");
// const result_box = document.querySelector(".result");
// const option_list = document.querySelector(".choiceList");


// const restartButton = document.getElementById("start-over");
//   const clearHighSCores = document.getElementById("clear-highscores");
//   const viewHighScores = document.getElementById("veiw-highscores");
//   const startQuiz = document.getElementById("start");
//   const goBack = document.getElementById("back");
//   const submitScores = document.getElementById("submit");
// //   const userScoress = document.getElementById("user-score");
//   const questionNum = document.getElementById("question_text");
//   const trueBtn = document.getElementById("true");
//   const falseBtn = document.getElementById("false");
//   const choiceList =document.querySelector(".choiceList");

//   // establish actions of the click of buttons

//   restartButton.addEventListener("click", restart);
//   clearHighSCores.addEventListener("click", clear - highscores);
// viewHighScores.addEventListener("click", viewHighScores){

// };

//   submitScores.addEventListener("click", submit);
//   startQuiz.addEventListener("click", start);
//   goBack.addEventListener("click", back);
//   submitScores.addEventListener("click", submit);

var questionContainer = document.querySelector("body");

// Listen for any clicks within the img-container div
questionContainer.addEventListener("click", function (event) {
  var element = event.target;
  console.log(element);
  if (element.matches("view-highscores")) {
    // Get the current value of the image's data-state attribute
    var viewHighScores = document.getElementById("veiw-highscores");

    if (state === "still") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "animate";
      element.setAttribute("data-state", "animate");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});
