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
  var queCount = 0;
  var queNum = 1;
  var UserScores = 0;
  var countDown;
  var counterLine;
  var widthValue = 0;
  var score= 0;
  
  //selecting all required elements
  const start_btn = document.querySelector(".start");
  // const info_box = document.querySelector(".info_box");
  // const exit_btn = info_box.querySelector(".buttons .quit");
  // const continue_btn = info_box.querySelector(".buttons .restart");
  // const quiz_box = document.querySelector(".quiz_box");
  // const result_box = document.querySelector(".result_box");
  // const option_list = document.querySelector(".option_list");
  // const time_line = document.querySelector("header .time_line");
  // const timeText = document.querySelector(".timer .time_left_txt");
  // const timeCount = document.querySelector(".timer .timer_sec");
  
  
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
  
  
  
  // The data/time we want to countdown to
  var countDownDate = new Date("jan 01, 1969 00:12:52").getTime()
  // Run myfunc every second
  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeValue = countDownDate - now;
  
    // Calculating the days, hours, minutes and seconds left
    //  var days = Math.floor(timeValue / (10000 * 6000 * 6000 * 24));
    //  var hours = Math.floor((timeValue % (100 * 60 * 60 * 24)) / (10000 * 60 * 60));
    //  var minutes = Math.floor((timeValue % (10 * 60 * 60)) / (10000 * 60));
     var seconds = Math.floor((timeValue % (1080 * 60)) / 1000);
    // var days = Math.floor(timeValue / (10000 * 6000 * 6000 * 24));
    // var hours = Math.floor(
    //   (timeValue % (100 * 60 * 60 * 24)) / (10000 * 60 * 60)
    // );
    // var minutes = Math.floor((timeValue % (10 * 60 * 60)) / (10000 * 60));
    // var seconds = Math.floor((timeValue % (110 * 60)) / 1000);
    // Result is output to the specific element
    // document.getElementById("days").innerHTML = days + "d ";
    // document.getElementById("hours").innerHTML = hours + "h ";
    // document.getElementById("mins").innerHTML = minutes + "m ";
    document.getElementById("secs").innerHTML = seconds + "s ";
  console.log();
    // Display the message when countdown is over
    if (seconds < 0) {
      clearInterval(myfunc);
      // document.getElementById("days").innerHTML = "";
      // document.getElementById("hours").innerHTML = "";
      // document.getElementById("mins").innerHTML = "";
      document.getElementById("secs").innerHTML = "";
      document.getElementById("end").innerHTML = "TIME UP!!";
    }console.log(seconds);
  }, 1000);
  
  
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
  // //   const UserScores = document.getElementById("user-score");
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
    startQuiz.addEventListener("click", start);
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
  