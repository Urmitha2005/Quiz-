let history =
JSON.parse(
localStorage.getItem(
"history"
)
) || [];

let body =
document.getElementById(
"historyBody"
);

history.reverse()
.forEach(item=>{

body.innerHTML += `

<tr>

<td>
${item.name}
</td>

<td>
${item.score}
</td>

<td>
${item.percentage}%
</td>

<td>
${item.date}
</td>

</tr>

`;

});