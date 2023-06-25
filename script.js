// establish button functions
const restartButton = document.getElementById('start-over');
const clearHighSCores = document.getElementById('clear-highscores');
const viewHighScores = document.getElementById('veiw-highscores');
const startQuiz = document.getElementById('start');
const goBack = document.getElementById('back');
const submitScores = document.getElementById('submit');
const UserScores = document.getElementById('user-score');
const questionNum = document.getElementById('question-text');
const trueBtn = document.getElementById('true')
const falseBtn = document.getElementById('false')

// establish actions of the click of buttons


restartButton.addEventListener('click',restart);
clearHighSCores.addEventListener('click',clear-highscores);
viewHighScores.addEventListener('click',view-highscores);
submitScores.addEventListener('click',submit);
startQuiz.addEventListener('click',start);
goBack.addEventListener('click',back);
submitScores.addEventListener('click',submit);



var currentQuestion = 0
var grade = 0 

var questions = ( {
    question: " is coding fun ?",
        answers:( 
        {option:"yes",answer:true},
        {option:"no",answer:false},
        {option:"maybe",answer:false},
        {option:"who knows",answer:false})
},
    {question: " are you gettin better ?",
        answers:( 
        {option:"yes",answer:true},
        {option:"no",answer:false},
        {option:"maybe",answer:false},
        {option:"who knows",answer:false})
    },
    {question: " are you learning?",
        answers:( 
        {option:"yes",answer:true},
        {option:"no",answer:false},
        {option:"maybe",answer:false},
        {option:"who knows",answer:false})
    },
    {question: " what do you think ?",
         answers:( 
         {option:"yes",answer:true},
         {option:"no",answer:false},
         {option:"maybe",answer:false},
        {option:"who knows",answer:false})
    },
    {question: "is it better?",
        answers:( 
        {option:"yes",answer:true},
        {option:"no",answer:false},
        {option:"maybe",answer:false},
        {option:"who knows",answer:false})}
)

function startTest() {
    currentQuestion =0
    questionNum.innerHTML = questions[currentQuestion].question;
    // change button  name goBack.
    trueBtn.innHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        var ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(grade<3) {
                score++;
            }
        }
        UserScores.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
}
falseBtn.HTML = questions[currentQuestion].answers[1].option
falseBtn.onclick =( =>{})