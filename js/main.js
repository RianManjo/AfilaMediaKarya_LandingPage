
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


// Deklarasi variabel untuk menyimpan kode JavaScript
var navScript = function() {
    // Mengatur fungsi saat tombol hamburger diklik
    $('.hamburger').click(function() {
        $('.menus').toggleClass('active'); // Toggle class 'active' untuk menampilkan atau menyembunyikan menu
    });
};

// Memanggil fungsi saat dokumen siap
$(document).ready(function() {
    navScript(); // Memanggil fungsi yang telah dideklarasikan sebelumnya
});
