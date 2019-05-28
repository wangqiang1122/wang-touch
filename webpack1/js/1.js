import $ from 'jquery';

$(function () {
    $('.cli').click(function () {
        console.log(this)
        $(this).css('background','red')
    });
})
// $('cli').click(
//
// );