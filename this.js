// mebuat object
//  this
// var a = 20;
// console.log(window.a);
// console.log(this);


// caraa 1 - function Declaration  
// function halo (){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikkan object global


// cara 2 - object literal 
// var obj = {};
// obj.halo = function(){
//     console.log(this);
//     console.log('Haloo 2')
// }
// obj.halo();
// this mengembalikkan object yang bersangkutan 


// cara 3 - contructor 
// function haloo(){
//     console.log(this)
//     console.log('halo33');
// }
// new haloo();
// mengembalikkan object yang baru di buat