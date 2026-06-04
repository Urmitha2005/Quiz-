let quizzes =
JSON.parse(
localStorage.getItem(
"quizzes"
)
) || [];

let quizIndex =
localStorage.getItem(
"selectedQuiz"
);

let quiz =
quizzes[quizIndex];

if(!quiz){

alert("Quiz not found");

window.location.href =
"category.html";
}

let questions =
quiz.questions;

let currentQuestion = 0;

let score = 0;

let selectedAnswer = "";

let userAnswers = [];

let timer = 30;

let defaultTimer = 30;

let timerInterval;

document.getElementById(
"categoryName"
).innerText =
quiz.category;

loadQuestion();

startTimer();

function loadQuestion(){

let q =
questions[currentQuestion];

document.getElementById(
"question"
).innerText =
q.question;

document.getElementById(
"questionNumber"
).innerText =
"Question " +
(currentQuestion + 1) +
" of " +
questions.length;

let progress =
(
(currentQuestion + 1)
/
questions.length
) * 100;

document.getElementById(
"progressFill"
).style.width =
progress + "%";

let html = "";

q.options.forEach(option=>{

html += `
<div
class="option"
onclick="selectOption(this,'${option}')">

${option}

</div>
`;

});

document.getElementById(
"options"
).innerHTML =
html;
}

function selectOption(
element,
option
){

document
.querySelectorAll(
".option"
)
.forEach(opt=>{

opt.classList.remove(
"selected"
);

});

element.classList.add(
"selected"
);

selectedAnswer =
option;
}

function nextQuestion(){

if(selectedAnswer===""){

alert(
"Select an answer"
);

return;
}

userAnswers.push({

question:
questions[currentQuestion]
.question,

selected:
selectedAnswer,

correct:
questions[currentQuestion]
.answer

});

if(
selectedAnswer ===
questions[currentQuestion]
.answer
){

score++;
}

currentQuestion++;

selectedAnswer="";

timer=30;

if(
currentQuestion >=
questions.length
){

finishQuiz();

return;
}

loadQuestion();
}

function startTimer(){

timerInterval =
setInterval(()=>{

timer--;

document.getElementById(
"timer"
).innerText =
timer;

if(timer<=0){

userAnswers.push({

question:
questions[currentQuestion]
.question,

selected:
"No Answer",

correct:
questions[currentQuestion]
.answer

});

currentQuestion++;

timer=30;

if(
currentQuestion >=
questions.length
){

finishQuiz();

return;
}

loadQuestion();
}

},1000);

}

function finishQuiz(){

clearInterval(
timerInterval
);

localStorage.setItem(
"score",
score
);

localStorage.setItem(
"userAnswers",
JSON.stringify(
userAnswers
)
);

window.location.href =
"result.html";
}