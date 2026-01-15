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
window.addEventListener("load", () => {
 document.querySelectorAll("section").forEach(sec=>{
  sec.classList.add("show");
 });
});
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(topBtn){   // SAFETY CHECK

        if(document.body.scrollTop > 200 || 
           document.documentElement.scrollTop > 200){

            topBtn.style.display = "block";

        } else {
            topBtn.style.display = "none";
        }

    }
};

if(topBtn){
    topBtn.onclick = function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}