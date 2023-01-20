// var n;
var s = '' ;
var n = prompt("panjang vertikal belah ketupat : ");
n = parseInt(n);

//bentuk kri atas
for(i=n;i>0;i--){
    for(j=1;j<=i-1;j++){ 
    s += ' '; 
    };

    for(y=1;y<=n-i+1;y++){
    s += '*'; 
    };

    for(l=1;l<=n-i;l++){
        s += '*'; 
    };
    s += '\n';
}
console.log(s)