var GoofyFruit = ["AppleKiwi.png", "AppleBanana.png", "AppleOrange.png", "ApplePear.png", "Apple.png"];
var AppleShadow;
var RealApple = "Apple.png";
var Selection;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}





function CheckTheFruitSubmitted(){
    AppleShadow = document.getElementById("AppleShadow");
    console.log("in");
    if(AppleShadow.src !== "https://cthulhufthaghn.github.io/WebTech/Guess_The_Fruit/GuessTheFruitImg/AppleShadow.png")
    {
        console.log("On a return");
        console.log("V3");
        console.log(AppleShadow.src);
        return; //Make the button spamming impossible as long as a fruit is revealed
    }
    Selection = document.getElementById("FruitSelection").value;
    var SelectiontoString = Selection.toString();
    if(Selection == "Apple")
    {
        GoofyFruit.splice(4,1)
        
    }
    if(Selection == "Kiwi")
    {
        GoofyFruit.splice(0,1)
        
    }
    if(Selection == "Banana")
    {
        GoofyFruit.splice(1,1)
        
    }
    if(Selection == "Pear")
    {
        GoofyFruit.splice(3,1)
        
    }
    if(Selection == "Orange")
    {
        GoofyFruit.splice(2,1)

    }
    if(Selection == "None")
    {
        alert("Please select a fruit !")
        return;
    }
    console.log(GoofyFruit)

    console.log("L'image va être changée");
    var MomentaryPicture = GoofyFruit[getRandomInt(4)];
    AppleShadow.src = "https://cthulhufthaghn.github.io/WebTech/Guess_The_Fruit/GuessTheFruitImg/" + MomentaryPicture.toString();
    GoofyFruit = ["AppleKiwi.png", "AppleBanana.png", "AppleOrange.png", "ApplePear.png","Apple.png"]; //We make sure the list is still full
    console.log("L'image a changée");
    return; 
}

function ResetImage()
{
    Reset = document.getElementById("AppleShadow");
    Reset.src = "GuessTheFruitImg/AppleShadow.png"
    return;
}
