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
}

