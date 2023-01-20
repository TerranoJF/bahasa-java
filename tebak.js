// kondisi ngulang game 
var ulang = true;
while (ulang) {

    // bikin angka yang mau di tebak
    // bangkitin bil.random 1-10
    var x = Math.floor(Math.random() * 10);
    console.log (x)

    // masukin perulangan berapa kali kesempatan
    for (kesempatan  = 5; kesempatan >= 1; kesempatan--) {
    
        // user input data
        var input = prompt('Kamu memiliki ' + kesempatan + 'x kesempatan, masukkan jawaban : ');

        // bikin clue bila kurang dari / lebih dari / jawaban benar 
        if (input > x) {
            alert('Tebakan kamu lebih besar');
        } else if (input < x) {
            alert('Tebakan kamu lebih kecil');
        }
        else {
            alert('Tebakkan kamu benar')
            kesempatan = 0;;
        }
    }

    var ulang = confirm('Ingin bermain kembali ??')
}