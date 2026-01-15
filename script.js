function showMessage(){
 alert("Welcome to my portfolio!");
}

function validate(){
 let name = document.getElementById("name").value;

 if(name == ""){
  alert("Please enter your name");
 }
 else{
  alert("Thank you " + name);
 }
}