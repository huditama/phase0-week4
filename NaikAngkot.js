function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var temp = []

   for (i = 0; i < arrPenumpang.length; i++) {
        
        var obj = {
            penumpang: '',
            naikDari: '',
            tujuan: '',
            bayar: 0
        }

        for (j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                var start = j
            } else if (arrPenumpang[i][2] === rute[j]) {
                var end = j
            }
        }    

        
        var uang =  (end - start) * 2000 

        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        obj.bayar = uang 

        temp.push(obj)
   }
return temp
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]