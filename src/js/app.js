
import $ from 'jquery';

$(document).ready(function() {

  $(window).bind('hashchange', function() {
    $('.preview__item').hide();
    var block = window.location.hash;
    $(block).show();
    $('.tab__link').removeClass('is-active');
    $(`[class="tab__link"][href="${block}"]`).addClass('is-active');
  });
});

