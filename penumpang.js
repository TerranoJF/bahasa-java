//  array untuk penumpang
// bikin perulangan untuk input data in/out dari penumpang
var penumpang = [],
    ulang = true,
    input = true ;
while (ulang) {
    while (input) {
        var data = prompt('Masukkan Nama Penumpang : ');
        inputLama = penumpang.find(function(x){
                return x == data;
            });
            
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined && data != null && data != "") {
            penumpang[i] = data;
            noKursi = penumpang.indexOf(data);
            alert('Penumpang '+ data + '\nBaru Saja Duduk di Angkot. \nDengan Kursi No : ' + (noKursi+1));
            input = confirm('Tekan OKE --> Penumpang Naik \nTekan CANCEL --> Penumpang Turun');
            };
        };
        if (inputLama) {
            alert('Penumpang sudah ada di dalam angkot');
        } else if (data=="" || data== null){
            alert('Nama Penumpang TIDAK Boleh Kosong');            
        } else if(!inputLama) {
            penumpang.push(data);
            console.log(penumpang)
            noKursi = penumpang.indexOf(data);
            alert('Penumpang '+ data + '\nBaru Saja Duduk di Angkot. \nDengan Kursi No : ' + (noKursi+1));
            input = confirm('Tekan OKE --> Penumpang Naik \nTekan CANCEL --> Penumpang Turun');
        }
    }
    while (!input) {
        data = prompt('Nama Penumpang di Dalam Angkot :\n'+ penumpang.join(', ') +'\nMasukkan Nama Penumpang Yang Akan Turun : ');
        noKursi = penumpang.indexOf(data);
        penumpang[noKursi] = undefined;
        input = confirm('Tekan OKE --> Penumpang Naik \nTekan CANCEL --> Penumpang Turun');
    }
}
// function  penumpang naik 2 parameter, namaPenumpang , array penumpang

// rules
// jika angkot kosong penumpang duduk dikursi pertama
// penumpang berikutnya duduk di kursi selanjutnya begitu seterusnya
// bila ada kursi kosong penumpang selanjutnya akan duduk di kursi kosong terlebih dahulu 
// nama penumpang tidak boleh sama, untuk menghindari kebingungan 
// asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik