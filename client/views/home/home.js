Template.home.rendered = function() {
  var options;
  var w = new WOW().init();
  var winWidth = $(window).width();
  var winHeight = $(window).height();

  $('#intro').css({
    width: winWidth,
    height: winHeight
  });

  $(window).resize(function() {
    return $('#intro').css({
      width: $(window).width(),
      height: $(window).height()
    });
  });

  if (!Utils.isMobile) {
    options = {
      forceHeight: false,
      smoothScrolling: false
    };

    return skrollr.init(options).refresh();
  }
};

Template.home.destroyed = function() {
  return $('body').attr('style', '');
};
