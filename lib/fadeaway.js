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

  function getOffset(el) {
    return { top: el.getBoundingClientRect().top,
             bot: el.getBoundingClientRect().bottom };
  }

  function fadeAway (elements, opts) {
    var doc  = document,
        win  = window,
        html = doc.documentElement,
        els  = elements ? (els = isFinite(elements.length) ? elements : [elements]) : [],
        begin, strength;

    if(opts){
      begin = opts.begin ? opts.begin : 0;
      strength = opts.strength ? opts.strength : 1;

    }
   
    els.forEach(function(e){
      e.bot = Math.floor(getOffset(e).bot);
      e.top = Math.floor(getOffset(e).top);
    });

    window.onscroll = function(){
      var scroll = window.pageYOffset;

      els.forEach(function(e){
        var offset = getOffset(e);
        var opacity = 1;

        if(offset.top <= begin){
          opacity = 1 - ((scroll-(e.top-begin))/(e.bot-(e.top-begin)))*strength;
        }
      
        e.style.opacity = opacity;
      });
    }


  }

  return fadeAway;
});