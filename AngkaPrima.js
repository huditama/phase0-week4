function angkaPrima(num) {
  
  var counter = 0
  for (i = 0; i < num; i++) {
    if(num % i === 0) {
      counter++
    }
  }

  if (counter > 2) {
    return false
  } else {
    return true
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false