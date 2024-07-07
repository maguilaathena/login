function login(){
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;

 var real_username = "Athena123"
 var real_password = "Maguila123"

 if(username ==="" || password ===""){
    document.getElementById("error").innerHTML = "All textboxes is required";
 }

 else{
    if(username === real_username && password === real_password){
    document.getElementById("error").innerHTML = "Welcome" + username;
 }

 else {
    document.getElementById("error").innerHTML = "invalid username or password";
 }
}
}
function forgot(){
    alert("you clicked to forgot password");
}