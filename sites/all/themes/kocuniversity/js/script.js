/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

//ANIMATE HEADER MENU
    // Header menu mouseenter.
    $('#block-menu-menu-header-menu .is-expanded > a').mouseenter(function(){
      $('#block-menu-menu-header-menu').animate({height: "83px"}, 300);      
    });

    $('#block-menu-menu-header-menu > ul > .first').mouseenter(function(){
      $('#block-menu-menu-header-menu > ul > .first > ul').fadeIn();
      $('#block-menu-menu-header-menu > ul > .last > ul').fadeOut();  
    });

    $('#block-menu-menu-header-menu > ul > .is-leaf').mouseenter(function(){
      $('#block-menu-menu-header-menu > ul > .first > ul').fadeOut();
      $('#block-menu-menu-header-menu > ul > .last > ul').fadeOut();  
    });

    $('#block-menu-menu-header-menu > ul > .last').mouseenter(function(){
      $('#block-menu-menu-header-menu > ul > .first > ul').fadeOut();
      $('#block-menu-menu-header-menu > ul > .last > ul').fadeIn();    
    });

    //Header menu mouse out
    $('#header').mouseenter(function(){
      $('#block-menu-menu-header-menu').animate({height: "42px"}, 1100);
      $('#block-menu-menu-header-menu > ul > .last > ul').fadeOut(300); 
      $('#block-menu-menu-header-menu > ul > .first > ul').fadeOut(300);
    });
//END ANIMATE HEADER MENU

//ANIMATE MAIN MENU
//END ANIMATE MAIN MENU

  //Hide-show logic of search block
  $('#hide_show_search_button').click(function(){

    if ( $("#block-custom-search-blocks-1").is(":visible") ) {
      $('#block-system-main-menu').fadeIn(500);
      $('#block-custom-search-blocks-1').hide(); 
      $('#hide_show_search_button .fa-bars').addClass('fa-search');
      $('#hide_show_search_button .fa-search').removeClass('fa-bars');  
      $('#block-university-search-button').css("background-color", "#990000");
    } else { 
      $('#block-system-main-menu').hide();
      $('#block-custom-search-blocks-1').fadeIn(500);
      $('#hide_show_search_button .fa-search').addClass('fa-bars');
      $('#hide_show_search_button .fa-bars').removeClass('fa-search');
      $('#block-university-search-button').css("background-color", "#790A10");
    };
  })
  //*******************************

  //********Animate facebook button on contact page
  $('.contact-social .fa-facebook').mouseenter(function(){
    $('#circle-facebook').css('box-shadow', '0 0 10px rgba(0,0,0,0.5)');
  });

  $('.contact-social .fa-facebook').mouseout(function(){
    $('#circle-facebook').css('box-shadow', 'none');  
  });
  //***************************************************
    //********Animate twitter button on contact page
  $('.contact-social .fa-twitter').mouseenter(function(){
    $('#circle-twitter').css('box-shadow', '0 0 10px rgba(0,0,0,0.5)');
  });

  $('.contact-social .fa-twitter').mouseout(function(){
    $('#circle-twitter').css('box-shadow', 'none');    
  });
  //***************************************************
    //********Animate linkedin button on contact page
  $('.contact-social .fa-linkedin-square').mouseenter(function(){
    $('#circle-linkedin').css('box-shadow', '0 0 10px rgba(0,0,0,0.5)');
  });

  $('.contact-social .fa-linkedin-square').mouseout(function(){
    $('#circle-linkedin').css('box-shadow', 'none');    
  });
  //***************************************************

$(document).ready(function() {

  $('.single-people-right .views-field-field-e-mail').prepend('<div class="single-people-awasome"><i class="fa fa-envelope"></i></div>');
  $('.single-people-right .views-field-field-phone').prepend('<div class="single-people-awasome"><i class="fa fa-phone"></i></div>');
  $('.single-people-right .views-field-field-room-phone').prepend('<div class="single-people-awasome"><i class="fa fa-home"></i></div>');

  $('.views-field-field-detail-cv img').remove();
  $('.views-field-field-detail-cv .file a').prepend('<div><i class="fa fa-download"></i></div>');
  
  $('.study').attr({href: "javascript:void(0);",});

}); //****End document ready*****************

$('#research-interests').click(function(){
  $('#research-interests').addClass('active');  
  $('#courses').removeClass('active');
  $('#selected-publications').removeClass('active');
  $('#outreach').removeClass('active');

  //**********Show-Hide Views***********************
  $('.pane-people-research-interest').show();
  $('.pane-people-courses').hide();
  $('.pane-people-publications').hide();
  $('.pane-people-outreach').hide();
  //************************************************
});

$('#courses').click(function(){  
  $('#courses').addClass('active');
  $('#selected-publications').removeClass('active');
  $('#outreach').removeClass('active');
  $('#research-interests').removeClass('active');

  //**********Show-Hide Views***********************
  $('.pane-people-research-interest').hide();
  $('.pane-people-courses').show();
  $('.pane-people-publications').hide();
  $('.pane-people-outreach').hide();
  //************************************************
});

$('#selected-publications').click(function(){  
  $('#selected-publications').addClass('active');
  $('#outreach').removeClass('active');
  $('#research-interests').removeClass('active');
  $('#courses').removeClass('active');

  //**********Show-Hide Views***********************
  $('.pane-people-research-interest').hide();
  $('.pane-people-courses').hide();
  $('.pane-people-publications').show();
  $('.pane-people-outreach').hide();
  //************************************************
});

$('#outreach').click(function(){  
  $('#outreach').addClass('active');
  $('#research-interests').removeClass('active');
  $('#courses').removeClass('active');
  $('#selected-publications').removeClass('active');

  //**********Show-Hide Views***********************
  $('.pane-people-research-interest').hide();
  $('.pane-people-courses').hide();
  $('.pane-people-publications').hide();
  $('.pane-people-outreach').show();
  //************************************************
});

  $('.toogle-main').click(function(){
    if($('.views-field-field-main-body').is(':visible')) {
      $('.views-field-field-main-body').slideUp();
      $('.fa-plus-square').removeClass('active');
    } else {
      $('.views-field-field-main-body').slideDown();
      $('.fa-plus-square').addClass('active');}
  })

  $('.rg-data-title').click(function(e){
    var id = $(this).attr('data-attrd');
    if ($('#rg-data-'+id).is(':visible')){
      $('#rg-data-'+id).hide(600);
      $('#rg-data-'+id).stopPropagation();
    } else {
      $('#rg-data-'+id).show(600);
      $('#rg-data-'+id).stopPropagation();
    }  
  });


  }//End of Code
};


})(jQuery, Drupal, this, this.document);

