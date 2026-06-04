let playerName =
localStorage.getItem("playerName");

let score =
parseInt(
localStorage.getItem("score")
);

let answers =
JSON.parse(
localStorage.getItem(
"userAnswers"
)
);

let total =
answers.length;

let percentage =
Math.round(
(score/total)*100
);

let wrong =
total-score;

document.getElementById(
"playerName"
).innerText =
"Player: " + playerName;

document.getElementById(
"score"
).innerText =
"Score: " +
score +
" / " +
total;

document.getElementById(
"percentage"
).innerText =
"Accuracy: " +
percentage +
"%";

document.getElementById(
"correctCount"
).innerText =
"Correct: " +
score;

document.getElementById(
"wrongCount"
).innerText =
"Wrong: " +
wrong;

let performance = "";

if(percentage>=90){

performance="Excellent";
}
else if(percentage>=75){

performance="Very Good";
}
else if(percentage>=50){

performance="Good";
}
else{

performance="Needs Improvement";
}

document.getElementById(
"performance"
).innerText =
performance;

saveLeaderboard();

saveHistory();

let review =
document.getElementById(
"reviewContainer"
);

answers.forEach(answer=>{

let status =
answer.selected ===
answer.correct;

review.innerHTML += `

<div class="review-card">

<h3>

${answer.question}

</h3>

<br>

<p>

Your Answer:

<span class="${
status ?
'correct' :
'wrong'
}">

${answer.selected}

${status ?
'✅'
:
'❌'
}

</span>

</p>

<br>

<p>

Correct Answer:

<span class="correct">

${answer.correct}

✅

</span>

</p>

</div>

`;

});

function saveLeaderboard(){

let leaderboard =
JSON.parse(
localStorage.getItem(
"leaderboard"
)
) || [];

leaderboard.push({

name:playerName,

score:score

});

leaderboard.sort(
(a,b)=>b.score-a.score
);

localStorage.setItem(
"leaderboard",
JSON.stringify(
leaderboard
)
);
}

function saveHistory(){

let history =
JSON.parse(
localStorage.getItem(
"history"
)
) || [];

history.push({

name:playerName,

score:score,

percentage:percentage,

date:
new Date()
.toLocaleString()

});

localStorage.setItem(
"history",
JSON.stringify(
history
)
);
}

function playAgain(){

window.location.href =
"category.html";
}

function leaderboard(){

window.location.href =
"leaderboard.html";
}

function historyPage(){

window.location.href =
"history.html";
}

function home(){

window.location.href =
"index.html";
}
function certificate(){

if(percentage < 75){

alert(
"Certificate available only for scores 75% and above"
);

return;
}

window.location.href =
"certificate.html";
}
