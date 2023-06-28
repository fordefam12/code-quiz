var questions = [
  {
    question: "1.is coding fun ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "2.whast your favorite movie ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "3. forvaorite vacation ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "4.are you a coder ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "5.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "6.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "7.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "8.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "9.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  },
  {
    question: "10.how dedicated are you ?",
    answers: ["yes", "no", "maybe", "whateva"],
    correct: 1
  }];
var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
var c=180;
var t;
$(document).ready(function () {
  // first question
  displayCurrentQuestion();
  $(this).find('.prebutton').attr('disabled',"disabled");

  timedCount();
  $(this).find('prebutton').on ("click", function(){

    if (!quizOver){
      if (currentQuestion==0) {return false;}
        if(currentQuestion==1){
          $(".preButton").attr('disabled', 'disabled');
        }currentQuestion--;
        if (currentQuestion<questions.length){
          displayCurrentQuestion();
        }
    }
    else {
      if (viewingAns==3) {return false;}
      currentQuestion = 0; viewingAns = 3;
      viewResults();
    }
    $(this).find(".nextButton").on("click", function(){
      if (!quizOver)
    }
    var val = $("input[type='radio']:checked").val();
    if (val == undefined)
    {
    $(document).find(".quizMessage").text("please choose an answer");
    }
    else{
      $(document).find("quizMessage").hide();
      currentQuestion++;
    } iSelectedAnswer[currentQuestion]= val;
      currentQuestion++;
      if (currentQuestion >= 1){
        $('.preButton').prop("disabled" , false);
      } 
      if (currentQuestion < questions.length){
          displayCurrentQuestion(;)
      }
      else{
        displayScore();
        $('#iTimeShow').html('Quiz Completed!');
        $('#timer').html("you scored:" + correctAnswers + "out of:" +questions.length);
        c=185;
        $(document).find(".preButton").text("view Answer");
        quizOver =true;
        return false;
      } 
  }
}
);

})
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
