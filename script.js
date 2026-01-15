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

/* SHOW ALL SECTIONS SAFELY */
document.addEventListener("DOMContentLoaded", () => {
 document.querySelectorAll("section").forEach(sec=>{
  sec.style.opacity="1";
  sec.style.transform="none";
 });
});

/* BACK TO TOP */
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

 if(!topBtn) return;

 if(document.body.scrollTop > 200 || 
    document.documentElement.scrollTop > 200){
  topBtn.style.display="block";
 }
 else{
  topBtn.style.display="none";
 }

});

if(topBtn){
 topBtn.onclick = function(){
  window.scrollTo({
   top:0,
   behavior:"smooth"
  });
 }
}