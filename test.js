var noAngkot =1, 
    ulang = true,
    jumlahAngkot = prompt ('jumlah angkot :'), 
    angkotBeroperasi= prompt ('jumlah angkot yang beroperasi :'),
    angkotLembur = prompt ('angkot lembur :');
    
// pengulangan untuk memulai ulang program
while (ulang){
    for ( ; noAngkot <= jumlahAngkot; noAngkot++) {
        if (noAngkot <= angkotBeroperasi && noAngkot != angkotLembur) {
            console.log ("Angkot No. " + noAngkot + " beroperasi dengan baik");
        } else if (noAngkot==angkotLembur){
            console.log ("Angkot No. " + angkotLembur + " sedang lembur");
        }
        else {
            console.log ("Angkot No. " + noAngkot + " sedang tidak beroperasi");
        } 
    }
ulang = confirm ('lagi?');
if (ulang) {
    ulangInput = true;
}
}