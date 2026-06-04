if(
localStorage.getItem(
"adminLoggedIn"
)!=="true"
){

window.location.href =
"login.html";

}

let questions = [];

loadQuizzes();

function addQuestion(){

let question =
document.getElementById(
"question"
).value;

let option1 =
document.getElementById(
"option1"
).value;

let option2 =
document.getElementById(
"option2"
).value;

let option3 =
document.getElementById(
"option3"
).value;

let option4 =
document.getElementById(
"option4"
).value;

let answerIndex =
document.getElementById(
"answer"
).value;

if(
question==="" ||
option1==="" ||
option2==="" ||
option3==="" ||
option4==="" ||
answerIndex===""
){

alert(
"Please fill all question fields"
);

return;
}

let options = [
option1,
option2,
option3,
option4
];

questions.push({

question:question,

options:options,

answer:
options[
answerIndex-1
]

});

document.getElementById(
"count"
).innerText =
questions.length;

document.getElementById(
"question"
).value="";

document.getElementById(
"option1"
).value="";

document.getElementById(
"option2"
).value="";

document.getElementById(
"option3"
).value="";

document.getElementById(
"option4"
).value="";

document.getElementById(
"answer"
).value="";

alert(
"Question Added Successfully"
);
}

function saveQuiz(){

let category =
document.getElementById(
"category"
).value;

let description =
document.getElementById(
"description"
).value;

let difficulty =
document.getElementById(
"difficulty"
).value;

let timer =
document.getElementById(
"timer"
).value;

if(
category==="" ||
description==="" ||
difficulty==="" ||
timer===""
){

alert(
"Please fill all quiz details"
);

return;
}

if(
questions.length===0
){

alert(
"Add at least one question"
);

return;
}

let quizzes =
JSON.parse(
localStorage.getItem(
"quizzes"
)
) || [];

quizzes.push({

category,

description,

difficulty,

timer,

questions

});

localStorage.setItem(
"quizzes",
JSON.stringify(
quizzes
)
);

alert(
"Quiz Saved Successfully"
);

location.reload();
}

function loadQuizzes(){

let quizzes =
JSON.parse(
localStorage.getItem(
"quizzes"
)
) || [];

let list =
document.getElementById(
"quizList"
);

list.innerHTML="";

if(
quizzes.length===0
){

list.innerHTML =

"<p>No quizzes available.</p>";

return;
}

quizzes.forEach(
(quiz,index)=>{

list.innerHTML += `

<div class="quiz-card">

<h3>

${quiz.category}

</h3>

<p>

${quiz.description}

</p>

<p>

Difficulty:
${quiz.difficulty}

</p>

<p>

Questions:
${quiz.questions.length}

</p>

<p>

Timer:
${quiz.timer} sec

</p>

<button
class="delete-btn"
onclick="deleteQuiz(${index})">

🗑 Delete Quiz

</button>

</div>

`;

});
}

function deleteQuiz(index){

let quizzes =
JSON.parse(
localStorage.getItem(
"quizzes"
)
);

quizzes.splice(
index,
1
);

localStorage.setItem(
"quizzes",
JSON.stringify(
quizzes
)
);

loadQuizzes();
}