function characterPosition (string) {
  var letter = string.split('')
  var object = {};
  for(i = 0; i < letter.length; i++ ) {
    currentLetter = letter[i]; {
      if (object[currentLetter] === undefined) {
        object[currentLetter] = i.toString();
        // console.log(object);
      } else {
        object[currentLetter] += "," + i;
          //console.log(object);
      }
    }
  }
return object
}



console.log(characterPosition('less'));
console.log(characterPosition('shiv ang na'));

