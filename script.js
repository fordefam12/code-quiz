var questions = [{
  question: "1. How do you write 'Hello World' in an alert box?",
  choices: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
  correctAnswer: 3
}, {
  question: "2. How to empty an array in JavaScript?",
  choices: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
  correctAnswer: 2
}, {
  question: "3. What function to add an element at the begining of an array and one at the end?",
  choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
  correctAnswer: 1
}, {
  question: "4. What will this output? let a = [1, 2, 3]; console.log(a[6]);",
  choices: ["undefined", "0", "prints nothing", "Syntax error"],
  correctAnswer: 0
}, {
  question: "5. What would following code return? console.log(typeof typeof 1);",
  choices: ["string", "number", "Syntax error", "undefined"],
  correctAnswer: 0
},{
question: "6. Which software company developed JavaScript?",
  choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
  correctAnswer: 1
},{
question: "7. What would be the result of 3+2+'7'?",
  choices: ["327", "12", "14", "57"],
  correctAnswer: 3
},{
question: "8. Look at the following selector: $('div'). What does it select?",
  choices: ["The first div element", "The last div element", "All div elements", "Current div element"],
  correctAnswer: 2
},{
question: "9. How can a value be appended to an array?",
  options: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
  correctAnswer: 1
},{
question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
  choices: ["'32'", "'122'", "'13'", "'14'"],
  correctAnswer: 0
}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
var c=180;
var t;
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// questionText.textContent=questions[currentQuestionIndex].question
// var answerChoice1 = document.createElement("button");
// var answerChoice2 = document.createElement("button");
// var answerChoice3 = document.createElement("button");
// var answerChoice4 = document.createElement("button");

// answerChoice1.textContent=questions[currentQuestionIndex].answers[0];
// answerChoice2.textContent=questions[currentQuestionIndex].answers[1];
// answerChoice3.textContent=questions[currentQuestionIndex].answers[2];
// answerChoice4.textContent=questions[currentQuestionIndex].answers[3];

// choiceList.appendChild(answerChoice1);
// choiceList.appendChild(answerChoice2);
// choiceList.appendChild(answerChoice3);
// choiceList.appendChild(answerChoice4);
