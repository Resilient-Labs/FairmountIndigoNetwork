/**
 * Created by Muigai on 5/31/2016.
 */

$(document).ready(function(){
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $('.links').toggleClass('open');
    });
});