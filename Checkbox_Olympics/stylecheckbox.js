var Begin;
var TimerAntiReset;
var numberOfCheckboxes
var timer;
var sec;
var minute;

function Timer(){
    if(TimerAntiReset == 1)
    {
        return;
    }
    TimerAntiReset = 1
    sec = 0;
    minute = 0;
    timer = setInterval(function(){
        document.getElementById('TimeCounter').innerHTML= minute+ ":"+sec; //Works only for less than an hour
        sec++;
        if (sec < 0) {
            clearInterval(timer);
        }
        if(sec==60)
        {
            sec = 0;
            minute++;
        }
    }, 1000);
}

function pause()
{
    clearInterval(timer);
}


function Start(){
    Timer();
    
    if(Begin == 1)
    {
        alert("You already began !")
        return;
    }
    var DivOlympics = document.getElementById("CheckBoxOlympics")
    NumberValue = document.getElementById("NumberCheckBox").value;
    for(numberOfCheckboxes = 0; numberOfCheckboxes < NumberValue; numberOfCheckboxes++)
    {
        var CheckBox = document.createElement("input");
        CheckBox.type = "checkbox";
        CheckBox.id = "checkbox_"+numberOfCheckboxes;
        console.log(CheckBox.id)
        CheckBox.addEventListener('change', IsChecked)
        var positionX = Math.random()*450 //div width
        var positionY = Math.random()*450 //div height

        CheckBox.style.position="absolute"
        CheckBox.style.left = positionX + "px"
        CheckBox.style.top = positionY + "px";

        DivOlympics.appendChild(CheckBox)
    }
    Begin = 1;
    return;
    
}

function IsChecked(){
    console.log("OnREntredanslafonction")
    for(var i = 0; i < NumberValue; i++)
    {
        CheckBox = document.getElementById("checkbox_"+i)
        if(CheckBox.checked == false)
        {
            return;
        }
        
    }
    pause();
    alert("Congratulations ! You made a time of : " + minute + " minutes and " + sec + " seconds !")
    for(var i = 0; i < NumberValue; i++)
    {
        CheckBox = document.getElementById("checkbox_"+i)
        CheckBox.remove();    
    }
    Begin = 0;
    TimerAntiReset = 0;
    

}