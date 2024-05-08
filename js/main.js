
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

var navScript = function() {

    $('.hamburger').click(function() {
        $('.menus').toggleClass('active'); 
    });
};

$(document).ready(function() {
    navScript(); 
});
