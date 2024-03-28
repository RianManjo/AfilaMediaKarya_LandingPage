// Mendefinisikan fungsi untuk memusatkan elemen-elemen footer pada tampilan mobile
function centerFooterItems() {
    var windowWidth = $(window).width(); // Lebar layar browser

    // Jika lebar layar kurang dari 768 piksel (tampilan mobile)
    if (windowWidth < 768) {
        // Mengubah class dari setiap kolom menjadi 'text-center'
        $('.footer .container .row > div').addClass('text-center');
    } else {
        // Menghapus class 'text-center' dari setiap kolom jika lebar layar lebih besar dari 768 piksel
        $('.footer .container .row > div').removeClass('text-center');
    }
}

// Memanggil fungsi saat dokumen dimuat
$(document).ready(function() {
    centerFooterItems(); // Memanggil fungsi untuk pertama kalinya saat halaman dimuat

    // Memanggil fungsi setiap kali ukuran layar berubah
    $(window).resize(function() {
        centerFooterItems();
    });
});
