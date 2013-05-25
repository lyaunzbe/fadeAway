/*
 * fadeAway
 * https://github.com/lyaunzbe/fadeaway
 *
 * Copyright (c) 2013 Ben L.
 * Licensed under the MIT license.
 */
!function (name, definition) {
  if (typeof define == 'function') define(definition);
  else if (typeof module != 'undefined') module.exports = definition();
  else this[name] = definition();
}('fadeAway', function() {
  util = {
    linear: function (t) { return t },
    easeInQuad: function (t) { return t*t },
    easeOutQuad: function (t) { return t*(2-t) },
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    easeInCubic: function (t) { return t*t*t },
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    easeInQuart: function (t) { return t*t*t*t },
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    easeInQuint: function (t) { return t*t*t*t*t },
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
  };

  function getOffset(el) {
    return { top: el.getBoundingClientRect().top,
             bot: el.getBoundingClientRect().bottom };
  }

  function fadeAway(elements, opts) {
    var doc  = document,
        win  = window,
        html = doc.documentElement,
        els  = elements ? 
               (els = isFinite(elements.length) ? elements : [elements]) : 
               [],
        begin, strength, easing;

    begin    = opts.begin ? opts.begin : 0;
    strength = opts.strength ? opts.strength : 1;
    easing   = opts.easing ? 
               (util.hasOwnProperty(opts.easing) ? opts.easing : 'linear') : 
               'linear';

    els.forEach(function(e){
      e.bot = Math.floor(getOffset(e).bot);
      e.top = Math.floor(getOffset(e).top);
    });

    window.onscroll = function () {
      var scroll = window.pageYOffset;

      els.forEach(function(e){
        var offset = getOffset(e);
        var opacity = 1;

        if (offset.top <= begin) {
          opacity = 1 - ((scroll-(e.top-begin))/(e.bot-(e.top-begin)))*strength;
        }
        e.style.opacity = util[easing](opacity);
      });
    }


  }

  return fadeAway;
});