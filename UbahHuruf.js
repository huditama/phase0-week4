function ubahHuruf(kata) {
  var fullAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  var string = ''

  for (i = 0; i < kata.length; i++) {
    for (j = 0; j < fullAlphabet.length; j++) {
      if (kata[i] === fullAlphabet[j]) {
        string += fullAlphabet[j+1]
      }
    }
  }
return string
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu