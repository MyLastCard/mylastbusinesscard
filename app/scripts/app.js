
$(document).ready(function() {
    
  // accordion
  $("section.open article").css('display', 'block');
  $("section.accordion h1").click(function(e){
    var $section = $(this).parent('.accordion');
    if (!$section.hasClass('open')) {
      $(".accordion.open").removeClass('open').find("article").slideUp();
      $(this).parent('section').addClass('open').find("article").slideDown();      
    } else {
      $(".accordion.open").removeClass('open').find("article").slideUp();
    }
  });
  
  // carousel
  $('#content-slider-1').royalSlider({
    autoHeight: true,
    arrowsNav: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    loop: true,
    loopRewind: false,
    numImagesToPreload: 6,
    keyboardNavEnabled: true,
    usePreloader: false
  });
  
});