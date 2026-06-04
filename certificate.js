let playerName =
localStorage.getItem(
"playerName"
);

let score =
parseInt(
localStorage.getItem(
"score"
)
);

let selectedQuiz =
localStorage.getItem(
"selectedQuiz"
);

let quizzes =
JSON.parse(
localStorage.getItem(
"quizzes"
)
);

let quiz =
quizzes[selectedQuiz];

let answers =
JSON.parse(
localStorage.getItem(
"userAnswers"
)
);

let percentage =
Math.round(
(score/answers.length)
*100
);

if(
percentage < 75
){

document.body.innerHTML = `

<div style="
text-align:center;
padding:100px;
font-family:Poppins;
">

<h1 style="
color:red;
">

❌ Certificate Not Available

</h1>

<br>

<h2>

You scored
${percentage}%

</h2>

<br>

<p>

Minimum 75% required
to generate certificate.

</p>

<br>

<button
onclick="window.location.href='result.html'">

Back

</button>

</div>

`;

}
else{

document.getElementById(
"studentName"
).innerText =
playerName;

document.getElementById(
"quizName"
).innerText =
quiz.category;

document.getElementById(
"score"
).innerText =
"Score : "
+
score
+
" / "
+
answers.length;

document.getElementById(
"percentage"
).innerText =
"Percentage : "
+
percentage
+
"%";

document.getElementById(
"date"
).innerText =
"Date : "
+
new Date()
.toLocaleDateString();

}

function goHome(){

window.location.href =
"index.html";
}