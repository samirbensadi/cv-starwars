$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 780; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
    $(window).scroll(function() { //changer la couleur de la barre de navigation
        if ($(window).scrollTop() < $(window).height()) {
            $("nav").css({
                "background-color": "black",
                "transition":"1s"
            });
        }
    });

});
