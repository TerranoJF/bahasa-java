var item,
    ulang = true;
while (ulang) {
    item = prompt('masukkan makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');
    
    switch (item) {
        case 'nasi':
        case 'daging':
        case 'susu':
            alert('makanan / minuman SEHAT')   
            break;
        case 'hamburger':
        case 'softdrink':
            alert('makanan / minuman TIDAK SEHAT')
            break;
        default:
            alert ('anda memasukkan nama makanan atau minuman yang salah')
            brseak;
    }
}