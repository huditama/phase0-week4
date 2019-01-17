function urutkanAbjad(str) {
  var strSplit = str.split('')
  var string = ''

  for (i = 0; i < str.length; i++) {
    for (j = i+1; j < str.length; j++) {
      if(strSplit[i] > strSplit[j]) {
        string = strSplit[i]
        strSplit[i] = strSplit[j]
        strSplit[j] = string
      }
    }
  }
 return strSplit.join('') 
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'