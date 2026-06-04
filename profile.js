let history =
JSON.parse(
localStorage.getItem(
"history"
)
) || [];

let playerName =
localStorage.getItem(
"playerName"
) || "Student";

document.getElementById(
"studentName"
).innerText =
playerName;

let attempts =
history.filter(
h => h.name === playerName
);

document.getElementById(
"totalAttempts"
).innerText =
attempts.length;

let average = 0;

if(attempts.length){

average =
attempts.reduce(
(sum,a)=>
sum+a.percentage,
0
)
/attempts.length;
}

document.getElementById(
"averageScore"
).innerText =
Math.round(
average
) + "%";

let highest = 0;

attempts.forEach(a=>{

if(a.percentage > highest){

highest =
a.percentage;
}

});

document.getElementById(
"highestScore"
).innerText =
highest + "%";

let badges =
document.getElementById(
"badges"
);

if(attempts.length>=1){

addBadge(
"🏅 First Quiz Completed"
);
}

if(
attempts.some(
a=>a.percentage===100
)
){

addBadge(
"💯 Perfect Score"
);
}

if(average>=60){

addBadge(
"🥉 Bronze Quiz Master"
);
}

if(average>=80){

addBadge(
"🥈 Silver Quiz Master"
);
}

if(average>=90){

addBadge(
"🥇 Gold Quiz Master"
);
}

function addBadge(text){

badges.innerHTML +=

`<div class="badge">

${text}

</div>`;
}

function goHome(){

window.location.href =
"index.html";
}