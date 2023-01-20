var n=prompt("Masukkan nilai ");
n=parseInt(n);

//bentuk kri atas
for(i=n;i>0;i--){
    for(j=1;j<=i-1;j++){
    document.write('&nbsp&nbsp');
    }

    for(y=1;y<=n-i+1;y++){
    document.write('*');
    }

    for(l=1;l<=n-i;l++){
    document.write('*');
    }
     
    document.write('<br>:');
}