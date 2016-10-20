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

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add('hide');
        x[i].classList.add('fade');
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].classList.remove('hide');
    /*x[slideIndex-1].style.display = "flex";*/
    setTimeout(carousel, 2000); // Change image every 4 seconds
}
