let width = 15;
let TableHeight = 10;
let plateau;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function CreateTable() {
  CowTable = new Array(TableHeight);
  for (let i = 0; i < TableHeight; i++) {
    CowTable[i] = new Array(width);
  }
  let contenu = document.querySelector("#contenu");
  let monTableau = document.createElement("table");
  var RandomCowY = getRandomInt(14);
  var RandomCowX = getRandomInt(9);
  console.log("Y :" +RandomCowX)
  console.log( "X :" + RandomCowY)


  // lignes 
  for (let i = 0; i < TableHeight; i++) {
    let uneLigne = document.createElement("tr");
    for (let j = 0; j < width; j++) {
      let uneColonne = document.createElement("td");
      uneLigne.appendChild(uneColonne);
      uneColonne.style.backgroundSize = "contain";
      CowTable[i][j] = uneColonne;
      CowTable[i][j].onclick = 

      function tableText(tableCell) {
        if(i == RandomCowX && j == RandomCowY)
        {
          var Case = document.getElementById("CowTable_" + i + "_" + j);
            Case.style.backgroundColor = "green";
            alert("You just found the cow !");
            
            return;
        }
        else{
            audio = new Audio("CowSounds/Cow" + (getRandomInt(5) + 1) + ".mp3");
          var distance = Math.sqrt((i * i) + (j * j)); 
          var distanceCow = Math.sqrt(Math.pow(RandomCowX - i, 2) + Math.pow(RandomCowY - j, 2));
          var volume = 1 - (distanceCow / Math.sqrt((TableHeight * TableHeight) + (width * width)));
          console.log("Volume: " + volume);
          audio.volume = volume;
          audio.play();
          var Case = document.getElementById("CowTable_" + i + "_" + j);
          Case.style.backgroundColor = "red";
        }
        return;
        }

      CowTable[i][j].id = "CowTable_" + i + "_" + j;
    monTableau.appendChild(uneLigne);
    }
  contenu.appendChild(monTableau);
         }
}

function Refresh()
  {
    window.location.reload()
  }
