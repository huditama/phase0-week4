function checkAB(str) {
  var counterA = 0
  var counterB = 0

  for (i = 0; i < str.length; i++) {
    var difference = counterA - counterB

    if (str[i] == 'a') {
      counterA = i
    } else if (str[i] == 'b') {
      counterB = i
    }   
  }

  if (Math.abs(difference) === 4) {
  return true
  } else {
  return false
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

