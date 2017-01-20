$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1500; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    $(window).scroll(function() { //changer la couleur de la barre de navigation au scroll
        if ($(window).scrollTop() > 50) {
            $("nav").css({
                "background-color": "black",
                "transition": "2s"
            });
        } else {
            $("nav").css({
                "background-color": "transparent",
                "transition": "0.5s"
            });
        }
    });



});
