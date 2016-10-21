/**
 * Created by Muigai on 5/31/2016.
 */

$(document).ready(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('.links').toggleClass('open');
    });
});

var slideIndex = 0;
carousel();
setInterval(carousel, 4000)

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    var y = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add('hide');
        y[i].classList.add('empty');
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].classList.remove('hide');
    y[slideIndex-1].classList.remove('empty');
    //setTimeout(carousel, 4000); // Change image every 4 seconds
}

$(document).ready(function() {
    $('.dot').click(function() {
        slideIndex = this.innerHTML - 1;
        carousel();
    });
});
