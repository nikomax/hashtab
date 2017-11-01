import $ from 'jquery';

$(document).ready(function() {

  $(window).bind('hashchange', function() {
    $('.preview__item').removeClass('is-active');
    var block = window.location.hash;
    $(block).addClass('is-active');
    $('.tab__link').removeClass('is-active');
    $(`[class="tab__link"][href="${block}"]`).addClass('is-active');
  });
});

