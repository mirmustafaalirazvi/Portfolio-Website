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
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        let pos = sec.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (pos < screenHeight - 100) {
            sec.classList.add("show");
        }
    });
});
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}  