jQuery(document).ready(function ($) {

  var $toggle = $('#toggle');
  var $nav = $('#nav');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $nav.toggleClass('is-active');
    $('html').toggleClass('is-active');
  });

});
