
import $ from 'jquery';

$(document).ready(function() {

  $(window).bind('hashchange', function() { 
    $('.preview__item').hide();
    var block = window.location.hash;
    $(block).show();
  });
  $('.tab__link').on('click', function(e) {
    if (!$(this).hasClass('is-active')) {
      $('.tab__link').removeClass('is-active');
      
      $(this).addClass('is-active');
    } else {
      $(this).removeClass('is-active');
    }
    
  });
});

