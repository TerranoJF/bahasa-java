var ulang = true;
while (ulang) {
    //  menagkap ppilihan player 
    var p = prompt('pilih : gajah, semut, orang');

    // menagkap pilihan komputer 
    // membangkitkann bilangan random
    var comp = Math.random();

    if (comp <= 0.34) {
        comp ='gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp= 'orang';
    };

    // peraturan
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah'){
        hasil = (comp == 'orang') ? 'MENANG': 'KALAH';
    } else if (p == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG': 'KALAH';
    } else if (p == 'orang'){
        hasil = (comp == 'semut') ? 'MENANG': 'KALAH';
    } else {
        alert ('kamu memasukkan inputan yang salah')
    }

    // tampilkan hasil nya 
    alert('Kamu memilih : ' +  p + ' dan Komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil);

    ulang = confirm('Bermain Lagi ??');
    var p = '',
        comp = '';
}
alert('terimakasih sudah bermain')