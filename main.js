let cards = document.querySelectorAll('.card');
for(let i in cards) {
    if(cards.hasOwnProperty(i)) {
        cards[i].addEventListener( 'click', function() {
            this.classList.toggle('is-flipped');
        });
    }
}

$(document).on('click', 'a.anchor', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 77
    }, 500);
});