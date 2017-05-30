pinController = new ScrollMagic.Controller();

pin = new ScrollMagic.Scene({
  triggerElement: '#trigger1', duration: 0, triggerHook: 'onLeave',
})
.setPin('#pin')
// .addIndicators({name: 'pin'})
.addTo(pinController);


mobileMenuController = new ScrollMagic.Controller();

hamburger = new ScrollMagic.Scene({
  triggerElement: '#trigger1', duration: 0, triggerHook: 'onLeave',
})
.setPin('div.mdl-layout__drawer-button')
// .addIndicators({name: 'mobile pin'})
.addTo(mobileMenuController);


triggerController = new ScrollMagic.Controller();

triggerController.scrollTo(function(newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
      });

$(document).on('click', 'a[href^=#]', function(e) {
  id = $(this).attr('href');
  if ($(id).length > 0) {
    e.preventDefault(); triggerController.scrollTo(id);
    if (window.history && window.history.pushState) {
      history.pushState('', document.title, id);
    }
  }
});

$('#mobileMenuController').click(function() {
  event.preventDefault();
  $('.mdl-layout__drawer-button').attr('aria-expanded', 'true');
  $('.mdl-layout__drawer').toggleClass('is-visible');
  $('.mdl-layout__obfuscator').toggleClass('is-visible');
  });

rellax = new Rellax('.rellax');

headerFadeController = new ScrollMagic.Controller();
headerTween = TweenMax.to('#pin', 1, {css: {autoAlpha: 1}});
headerFade = new ScrollMagic.Scene({
  triggerElement: '#trigger1', duration: 600, triggerHook: 'onEnter',
})
.setTween(headerTween)
.addTo(headerFadeController);


$grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'masonry',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  masonry: {
  columnWidth: '.grid-sizer',
},
  getSortData: {
    name: '.name',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
      },
    },
});


  filterFns = {
  numberGreaterThan50: function() {
    number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  ium: function() {
    name = $(this).find('.name').text();
    return name.match( /ium$/ );
  },
};

$('#filters').on( 'click', 'button', function() {
  filterValue = $( this ).attr('data-filter');
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({filter: filterValue});
});

$('#sorts').on( 'click', 'button', function() {
  sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({sortBy: sortByValue});
});

$('.button-group').each( function( i, buttonGroup ) {
  $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// ck
$(function() {
    $('.clientClass').hide();
    $('.affsClass').hide();
    $('.teamClass').hide();
    $('.contactClass').hide();

  $('.clientsTab').on('click', function(){
    $('.clientClass').hide();
    $('.affsClass').hide();
    $('.teamClass').hide();
    $('.contactClass').hide();
    $('.clientClass').show(200);

  });

  $('.affsTab').on('click', function(){
    $('.clientClass').hide();
    $('.affsClass').hide();
    $('.teamClass').hide();
    $('.contactClass').hide();
    $('.affsClass').show(200);

  });

  $('.teamTab').on('click', function(){
    $('.clientClass').hide();
    $('.affsClass').hide();
    $('.teamClass').hide();
    $('.contactClass').hide();
    $('.teamClass').show(200);

  });

  $('.contactTab').on('click', function(){
    $('.clientClass').hide();
    $('.affsClass').hide();
    $('.teamClass').hide();
    $('.contactClass').hide();
    $('.contactClass').show(200);

  });


});
