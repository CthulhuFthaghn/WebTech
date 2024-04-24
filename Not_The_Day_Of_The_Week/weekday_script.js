function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function DontGetTodaysDate() {
    var TodayDate = new Date();

   
    

    var year = TodayDate.getFullYear();


    function GetRandomDay(){
        var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        var random = getRandomInt(7)
        var NotTheDay = days[random];
        while(NotTheDay == days[TodayDate.getDay()-1])
        {
            var NotTheDay = days[getRandomInt(7)];
        }
        return NotTheDay;
    }
    function GetRandomMonth(){
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var random = getRandomInt(12)
        var NotTheMonth = months[random];
        return NotTheMonth;
    }


    var NotTheDay = GetRandomDay();
    var NotTheMonth = GetRandomMonth();

    var todaysdate = NotTheDay +  ' ' + Math.round(Math.random()*(31 - 1)+1) + ' '+ NotTheMonth + ' ' + year;
    var divNotTodya = document.getElementById("DefinitelyNotToday");

    divNotTodya.textContent = "Today is not : " + todaysdate;

    console.log(todaysdate); 
}

document.addEventListener("DOMContentLoaded", function () {
    DontGetTodaysDate();
})