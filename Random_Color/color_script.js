var hexcodelist = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var HexLetter;
var HexCode = "#"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function BackgroundColor(){
    for(let i = 0; i<6;i++)
    {
        console.log(getRandomInt(4) + 1);
        HexLetter = hexcodelist[Math.floor(Math.random()*hexcodelist.length)];
        HexCode = HexCode + HexLetter
        
    }
    console.log(HexCode)
    var Backgroundcolor = document.getElementById("HtmlColorFinder");
    Backgroundcolor.style.backgroundColor = HexCode;

    var divHexcolor = document.getElementById("Hexcolor");
    divHexcolor.textContent = "Color hex number : " + HexCode;

}

document.addEventListener("DOMContentLoaded", function() {
    BackgroundColor();
})