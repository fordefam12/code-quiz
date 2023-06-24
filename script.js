// establish button functions
const restartButton = document.getElementById('start-over')
const clearHighSCores = document.getElementById('clear-highscores')
const viewHighScores = document.getElementById('veiw-highscores')
const startQuiz = document.getElementById('start')
const goBack = document.getElementById('back')
const submitScores = document.getElementById('submit')
// establish actions of the click of buttons


restartButton.addEventListener('click',restart)
clearHighSCores.addEventListener('click',clear-highscores)
viewHighScores.addEventListener('click',view-highscores)

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
        {question: " are you gettin better ?",
        answers:( 
        {option:"yes",answer:true},
        {option:"no",answer:false},
        {option:"maybe",answer:false},
        {option:"who knows",answer:false})}
)
