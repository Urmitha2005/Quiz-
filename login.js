function login(){

let username =
document.getElementById(
"username"
).value;

let password =
document.getElementById(
"password"
).value;

if(
username==="admin"
&&
password==="admin123"
){

localStorage.setItem(
"adminLoggedIn",
"true"
);

window.location.href =
"admin.html";
}
else{

alert(
"Invalid Login"
);
}
}