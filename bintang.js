var s = '' ;
var x = prompt('Banyak Bintang :') ;
x = parseInt(x);
//  input data mesti bilangan ganjil 

// pengulangan baris BAGIAN AWAL - max lebar=x
for (var A = 0; A < x ; A+2) {
    
    // pengulangan SPACE
    for (var a = x; a > 0 ; a-2) {
            //pengulangan  SPACE DI MASING2 BARIS
            for ( var b = 0 ; b <= x ; j+2) {
                s += ' '; 
            }
        }; 


    // pengulangan untuk BINTANG perbaris
    for (var i = 0; i < 5 ; i+2) {
        //pengulangan  BINTANG DI MASING2 BARIS
        for ( var j = 0; j <= i; j+2) {
            s += '*'; 
        }
        s += '\n' 
    }; 
}
console.log(s)
; 




// for (var k = x; k >= 0 ; k--) {
//     for ( var j = 0; j <= k; j++) {
//         s += '*'; 
//     }
//     s += '\n' 
// }; 

console.log(s)