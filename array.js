// manipulasi array 

// Macam-macam method array
// 1. join
// var arr  = ["sandhika", "galih", "terra", "jazil"];
// console.log(arr.join(' - '));

// 2. push, pop, shift, unshift
// push menambahkan 1 atau lebih data di baris terakhir
// arr.push('doddy', 'arga', 'nasywa');

// pop menghapas data paling akhir sebuah data/element
// // arr.pop();
// arr.pop();
// arr.pop();

// unshift & shift untuk menambah & menghapas data di awal array bisa 1/lebih data
// arr.unshift('gaga', 'gigi');
// arr.shift()

// 3. slice & splice
// splice untuk menyisipkan data atau menghapus berapa ditengah array
// .splice(index awal, mau dihapus brp, elemen baru1, elemen baru2, ...)
// arr.splice(2 , 2 , "nofa", "dody", "yahya")

// slice 
// slice (awal, akhir);
// var arr  = ["sandhika", "galih", "terra", "jazil"];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 4. foreach
// untuk setiap element pada array lakukan seperti ini --> artinya untuk forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['terra', 'jazil', 'fadiat', 'moko']
// for (var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// angka.forEach(function(e){
//     console.log(e);
// });
//  i mengacu pada index pada arra (0,1,2,3) 
//  e mengacu pada element pada array ('terra', 'jazil', 'fadiat', 'moko')
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e)
// })

// 5. map
// var angka = [3,6,2,4,1,7,2,8,9];
// var angkaBaru = angka.map(function(e){
//     return e * 2;
// });
// console.log(angkaBaru.join(' - '));

// 6. sort mengurutkan
// var angka = [3,6,2,4,99,78,56,45,34,1,7,2,8,9];
// console.log(angka.join(' - '));
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));

// 7. filter & find
// filter untuk mencari banyak nilai lalu di masukkan ke array baru.
//  sedangkan find hanya mencari satu nilai saja, bila terdapat 2 nilai yang sama maka 
// akan di ambil nilai yang paling depan, serta tidak perlu menggunakan .join
// var angka = [3,6,2,4,99,78,25,18,56,45,34,1,7,2,8,9];
// var angkaBaru = angka.find(function(x){
//     return x < 30;
// });
// console.log(angkaBaru.join(' - '));
// console.log(angkaBaru);


// 1. menambah array 
// var arr = [];
// arr[0] = "Terrano";
// arr[1] = "Jazil";
// arr[2] = "Fadiatmoko";
// arr[3] = "Nofa";
// arr[4] = "Arya";

// console.log(arr);

// menghapus isi array
// var arr = ["sandhika", "galih", "terra", "jazil"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["sandhika", "galih", "terra", "jazil"];
// for( var i = 0 ; i < arr.length; i++ ){
//     console.log('Mahasiswa ke-' + ( i+1 )+ ' : ' +arr[i]);
// }