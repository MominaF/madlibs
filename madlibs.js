function generateMadlib() {
  
  // This is the starting story
  var story = "Once upon a time in a land far, far away there were a bunch of PLURAL_NOUN.It was birthday  VERB  ";
  

  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}