let leaderboard =
JSON.parse(
localStorage.getItem(
"leaderboard"
)
) || [];

let body =
document.getElementById(
"leaderboardBody"
);

if(
leaderboard.length === 0
){

body.innerHTML = `

<tr>

<td colspan="3">

No Records Found

</td>

</tr>

`;

}
else{

leaderboard.forEach(
(player,index)=>{

let medal = "";

if(index===0){

medal = "🥇";
}
else if(index===1){

medal = "🥈";
}
else if(index===2){

medal = "🥉";
}

body.innerHTML += `

<tr class="${
index===0
?
'top-player'
:
''
}">

<td>

${medal}
${index+1}

</td>

<td>

${player.name}

</td>

<td>

${player.score}

</td>

</tr>

`;

});

}

function goHome(){

window.location.href =
"index.html";

}