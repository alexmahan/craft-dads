$(window).on('scroll touchmove', function () {
  var headerElem = $('header');
  headerElem.toggleClass('smaller', $(document).scrollTop() > 50);
});