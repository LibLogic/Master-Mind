function matcher(guess, code) {
  let posMatchCount = 0,
    anyMatchCount = 0,
    usedGuesses = {};
  guess = guess.split("");
  code = code.split("");

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === code[i]) {
      if (!(guess[i] in usedGuesses)) {
        posMatchCount++;
        usedGuesses[guess[i]] = null;
      }
    }
  }
  // now lets look for any remaining matches
  for (let i = 0; i < guess.length; i++) {
    if (!(guess[i] in usedGuesses)) {
      for (let j = 0; j < code.length; j++) {
        if (guess[i] === code[j]) {
          anyMatchCount++;
        }
      }
    }
    usedGuesses[guess[i]] = null;
  }
  return [anyMatchCount, posMatchCount];
}

console.log(matcher("13214", "1234"));
