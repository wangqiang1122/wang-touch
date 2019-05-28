// import $ from 'jquery';


$(function () {
    $('#div').click(function () {
        console.log(this)
        $(this).css('background','red')
    });
})