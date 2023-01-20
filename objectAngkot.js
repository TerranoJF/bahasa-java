// sopir
// trayek
// kas
// penumpang
//  penumpang naik
//  penumpang turun
function Angkot (sopir, trayek, kas, penumpang){
    this.sopir = sopir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;


    // FUNGSI jika Penumpang Naik
    
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        alert('berhasil di input');
        return this.penumpang;
    }
 
    // Fungsi jika Penumpang turun
    this.penumpangTurun = function (namaPenumpang, bayar){
        // untuk mengecek apakah ada penumpang di dalam angkot/angkot kosong
        if (this.penumpang.length === 0){
            alert(namaPenumpang +'Tidak berada di angkot \nAngkot masih Kosong! ');
            return false;
        }
        // perulangan untuk mengganti isi dari array penumpang menjadi undefined & menambah kas
        for (var i = 0; i < this.penumpang.length; i++) {
            if(namaPenumpang == this.penumpang[i]){
                console.log(this.namaPenumpang);
                this.penumpang[i] = undefined;
                this.kas += bayar ;
            alert(namaPenumpang +' membayar Rp '+ bayar);
                return this.penumpang;
            };
            
        }

    };
};

var angkot1 = new Angkot('sandhika', ['cicaheum -> cibiru'], 0, [] );
var angkot2 = new Angkot('terra', ['antapani -> ciroyam'], 0, [] );


// PERULANGAN TANPA BATAS UNTUK INPUTAN USER
var item,
    ulang = true;
while (ulang) {
    item = prompt('Data Input\n 1 --> Angkot 1 Penumpang Naik \n 2 --> Angkot 1 Penumpang Turun\n 3 --> Angkot 2 Penumpang Naik\n 4 --> Angkot 2 Penumpang Turun\n 5 --> Mengecek Kas Angkot\n 6 --> Mengecek Status ke-2 Angkot');
    switch (item) {
        case '1':
            data = prompt("Nama Penumpang Naik : ");
            angkot1.penumpangNaik(data);break;
        case '2':
            data = prompt("Nama Penumpang Turun : ");
            data2 = prompt("Tarif Penumpang : ");
            angkot1.penumpangTurun(data, data2); break;

        case '3':
            data = prompt("Nama Penumpang Naik : ");
            angkot2.penumpangNaik(data); break;
        case '4':
            data = prompt("Nama Penumpang Turun : ");
            data2 = prompt("Tarif Penumpang : ");
            angkot2.penumpangTurun(data, data2); break;
        case '5':
            alert( 'Angkot 1\nJumlah Kas Terkumpul : '+ angkot1.kas + '\nAngkot 2\nJumlah Kas Terkumpul : ' + angkot2.kas); break;
        case '6':
            var arr = Object.values(angkot1);
            var arr2 = Object.values(angkot2);
            alert( 'Status Angkot 1 :\n '+
            'Sopir      : ' + angkot1.sopir  +
         '\n Trayek    : ' + angkot1.trayek  +
         '\n Kas         : ' + angkot1.kas  +
         '\n Penumpang : ' + angkot1.penumpang +

            '\n\n Status Angkot 2 :\n '+
            'Sopir      : ' + angkot2.sopir  +
        '\n Trayek    : ' + angkot2.trayek  +
        '\n Kas         : ' + angkot2.kas  +
        '\n Penumpang : ' + angkot2.penumpang 
             ); break;
        default:
            alert ('anda memasukkan inputan yang salah\nPastikan INPUTAN Anda Benar')
            break;
    }
}