var x,
    s = '' ;

x = prompt('Banyak Bintang :') ;

for (var i = 0; i < x ; i++) {
    for ( var j = 0; j <= i; j++) {
        s += '*'; 
    }
    s += '\n' 
}; 
for (var k = x; k >= 0 ; k--) {
    for ( var j = 0; j <= k; j++) {
        s += '*'; 
    }
    s += '\n' 
}; 

console.log(s)