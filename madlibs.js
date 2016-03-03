function generateMadlib() {
  
  
  var story = "Once upon a time in a land far, far away there were a bunch of PLURAL_NOUN.It was NAME 's birthday party. Everyone was VERB. Suddenly, a screeching TYPE_OF_NOISE broke the party up and everyone looked at NOUN.   ";
  

  var inputValue = document.getElementById("plural-noun-1").value; 
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("name").value;
  story = story.replace("NAME", inputValue);
  
    var inputValue = document.getElementById("noise-1").value; 
  story = story.replace("TYPE_OF_NOISE", inputValue);
  
   var inputValue = document.getElementById("noun-1").value; 
  story = story.replace("NOUN", inputValue);
  
  
  
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}