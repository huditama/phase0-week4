function digitPerkalianMinimum(angka) {
  var container = []
  var length = 0

  for (i = 1; i <= angka; i++) {
    var result = angka/i
    var strResult = String(i) + String(result)
  
    if (result % 1 === 0) {
      container.push(strResult)
    }
  }

  var countMinLength = container[0].length;
  for (j = 0; j < container.length; j++) {
   if(container[j].length < countMinLength) {
     countMinLength = container[j].length
   }
  }
  return countMinLength ;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2