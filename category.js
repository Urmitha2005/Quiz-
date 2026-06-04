let playerName =
localStorage.getItem(
"playerName"
);

document.getElementById(
"welcome"
).innerHTML =
"Welcome <b>" +
playerName +
"</b>";

let quizzes =
JSON.parse(
localStorage.getItem(
"quizzes"
)
) || [];

displayQuizzes(quizzes);

function displayQuizzes(data){

let container =
document.getElementById(
"quizContainer"
);

container.innerHTML="";

if(data.length===0){

container.innerHTML=`

<div class="card">

<h2>
No Quiz Found
</h2>

</div>

`;

return;
}

data.forEach(
(quiz,index)=>{

let badgeClass="easy";

if(
quiz.difficulty==="Medium"
){

badgeClass="medium";
}

if(
quiz.difficulty==="Hard"
){

badgeClass="hard";
}

container.innerHTML += `

<div
class="card"
onclick="startQuiz(${index})">

<h2>

${quiz.category}

</h2>

<p class="description">

${quiz.description}

</p>

<div
class="badge ${badgeClass}">

${quiz.difficulty}

</div>

<div class="info">

📚 Questions:
${quiz.questions.length}

</div>

<div class="info">

⏱️ Time:
${quiz.timer} sec

</div>

</div>

`;

});
}

function searchQuiz(){

let keyword =
document.getElementById(
"searchBox"
).value
.toLowerCase();

let filtered =
quizzes.filter(quiz=>

quiz.category
.toLowerCase()
.includes(keyword)

);

displayQuizzes(filtered);
}

function startQuiz(index){

localStorage.setItem(
"selectedQuiz",
index
);

window.location.href =
"quiz.html";
}