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
window.addEventListener("scroll", ()=>{
    document.querySelectorAll("section").forEach(sec=>{
        let pos = sec.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            sec.style.opacity="1";
            sec.style.transform="translateY(0)";
        }
    });
});