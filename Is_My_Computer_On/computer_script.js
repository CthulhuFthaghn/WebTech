var TextList = ['Yeah, it definitely isn\'t', 'Nah it\'s definitely not', 'It is not.', 'I feel like it is not, but that\'s my opinion to be honest.','What a dumb question... No it is not.','Really ? What are you even thinking about, it is NOT.'];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


document.addEventListener("DOMContentLoaded", function() {
    VariableText = document.getElementById("VariableText");
    VariableText.textContent = TextList[getRandomInt(5)];
})