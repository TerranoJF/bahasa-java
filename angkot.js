var noAngkot = 1, 
    jumlahAngkot, 
    angkotBeroperasi,
    ulang = true,
    ulangInput = true,
    lagi;

    // pengulangan untuk memulai ulang program
while (ulang){

    // pengulangan jika input data salah
    while (ulangInput) {
            var jumlahAngkot = prompt ('jumlah angkot :');
            var angkotBeroperasi = prompt ('jumlah angkot yang beroperasi :');
            
            if (angkotBeroperasi > jumlahAngkot) {
                alert ("inputnya yang bener woelah...");
            }
            else {
                ulangInput = false;
            }
    }
        // pengulangan untuk angkot yang beroperasi
    // while (noAngkot <= angkotBeroperasi){
    //     console.log ("Angkot No. " + noAngkot + " beroperasi dengan baik");
    // noAngkot++;
    // }

    // // pengulangan untuk angkot yang tidak beroperasi
    // for ( ;noAngkot <= jumlahAngkot ; noAngkot++) {
    //     console.log ("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    // }

    for ( ; noAngkot <= jumlahAngkot; noAngkot++) {
        if (noAngkot <= angkotBeroperasi) {
            console.log ("Angkot No. " + noAngkot + " beroperasi dengan baik");
        } else {
            console.log ("Angkot No. " + noAngkot + " sedang tidak beroperasi");
        } 
    }

    ulang = confirm ('lagi?');
 if (ulang) {
    ulangInput = true;
 }
    // var lagi = confirm ("lagi ?")
    // if (lagi == true) { 
    //     ulangInput = true;
    // } 
    // else {ulang = false;} 
}