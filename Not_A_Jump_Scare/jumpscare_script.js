var random;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
        var DivJumpscare = document.getElementById("Jumpscare");
    DivJumpscare.textContent = "Not a jumpscare !";
    }, getRandomInt(5000));
    
})