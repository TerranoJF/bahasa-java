// membuat object pada js
// object Literal --> kaya bikin lagi di tiap2 mhs nya
// var mhs1 = {
//     nama : "terrano jazil",
//     nrp : '04568374',
//     email : 'terranojazilf@gmail.com',
//     jurusan : 'IT'
// }
// var mhs2 = {
//     nama : "kobo kan aer",
//     nrp : '089645385',
//     email : 'kobakaer@gmail.com',
//     jurusan : 'vtub'
// }

// Functional Declaration --> lebih ringkas
// function buatObjectMahasiswa (nama, nrp, email, jurusan){
// var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }
// var mhs3 = buatObjectMahasiswa('nofa', '028456875', 'nofa@gmail.com', 'Teknik Bangunan')

// constructor function -->  keyword new
function mahasiswa (nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs4 = new mahasiswa ('erik', '085472354', 'erika@gmail.com', 'Teknik Mesin');


// object.create()

