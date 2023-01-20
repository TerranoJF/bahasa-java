// perulangan
var ulang = true;
while (ulang) {
    
// input data sisi kubus
    var a = prompt('Panjang Sisi Kubus Pertama');
    var A = prompt('Panjang Sisi Kubus Ke-2');

//  bikin function untuk mencari volume kedua kubus
    function jumlahVolumeDuaKubus(a, A){
        var hasil1,  hasil2, total;
        hasil1 = a * a * a ;
        hasil2 = A * A * A ;
        total = hasil1 + hasil2;
        return total;
    }

// pop up hasil dari penggabungan 2 kubus
    alert('Total Volume 2 Kubus Adalah : ' + jumlahVolumeDuaKubus(a, A));

ulang = confirm('Coba Lagi??');
}
// versi ggwp
// function volume(sisi) {
//     return sisi**3
//     }
//     function jmlhVol (a, b) {
//     return a + b
//     }
//     alert('"Penjumlahan Dua Buah Kubus"');
//     let sKub1 = prompt('Masukkan Sisi Kubus Ke 1');
//     let sKub2 = prompt('Masukkan Sisi Kubus Ke 2');
//     alert('Hasilnya Adalah ' + jmlhVol(volume(sKub1), volume(sKub2)));
    