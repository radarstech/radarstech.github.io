jQuery(document).ready(function($) { 

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload(); 
    }
});


$("select.refine").change(function(){
        var refine = $(this).children("option:selected").val();
         console.log(refine)
        filterSelection(refine)
    });

    $("select.media").change(function(){
        var media = $(this).children("option:selected").val();
        filterSelection(media)
    });


$( ".menubar .hamburger " ).click(function() {
      $('.mobilemenu').toggle();
      $( ".menubar .hamburger " ).toggleClass('is-active');     
   });

  

// DOM Ready
$('.slider').slick({
    // fade:true,
    autoplay:true,
    autoplaySpeed:4000,
    lazyLoad:"progressive",
    speed:600,
    arrows:false,
    dots:true,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });


$( ".fa-bars" ).click(function() {
  $('.mobilemenu').show();
  $('.fa-bars').hide();
  $('span.close').show();
});
$( "span.close" ).click(function() {
  $('.mobilemenu').hide();
  $('.fa-bars').show();
  $('span.close').hide();
});
$( ".showdetails" ).click(function() {
  $('.eventdetails .more').show('slow');
  $('.hidedetails').show();
  $('.showdetails').hide();
});
$( ".hidedetails" ).click(function() {
  $('.eventdetails .more').hide('slow');
  $('.hidedetails').hide();
  $('.showdetails').show();
});
$('.video-play-1').on('click', function(e) {
 $(".video").show();
 $(".bannercontent").hide();
 $(".video_iframe_vm")[0].src += "&autoplay=1";
 e.preventDefault(); 
});
$(".slider").on("beforeChange", function (){   
      $(".bannercontent").show();
      $(".video").hide();
});
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });


$( ".filtercontents span.closed" ).each(function( index ) {
    $(this).click(function(){ //mouseenter   
         var classna = $(this).attr("class");
         console.log(classna);
         if (classna === 'closed') {
         $(this).parent().parent().parent().siblings(".opencontent").show(); 
         $(this).removeClass("closed");  
         $(this).addClass("open");  
        } else {
         $(this).parent().parent().parent().siblings(".opencontent").hide(); 
         $(this).removeClass("open");  
         $(this).addClass("closed");  
        }
    });
});

$( ".filtercontents .contentwoimage p" ).each(function( index ) {
    $(this).mouseenter(function(){ //mouseenter            
           var contentclassname = $(this).attr('class');; 
          
           var currentclass = "." + contentclassname;
              //$(this).closest(currentclass).show(); 
           $(this).closest(".imageplaceholder").find("img" + currentclass).show();
           $(this).closest('.contentwoimage').addClass('highlight');



    });
    $(this).mouseleave(function(){ //mouseenter   
           var contentclassname = $(this).attr('class');          
           var currentclass = "." + contentclassname;
          $(this).closest(".imageplaceholder").find("img" + currentclass).hide();
            $(this).closest('.contentwoimage').removeClass('highlight');
    });
});


$( ".masonry-brick img" ).each(function( index ) {
    $(this).parents('.masonry-brick').hover(function(){ //mouseenter
      console.log("hello");
      $(this).find(".overlay").removeClass('fadeOut');    
        $(this).find(".overlay").show(); 
        $(this).find(".overlay").addClass('animated fadeIn');         
    }, function(){ //mouseleave
      $(this).find(".overlay").hide(); 
         $(this).find(".overlay").removeClass('animated fadeIn');    
       $(this).find(".overlay").addClass('animated fadeOut'); 
    });
});

$( ".filterDiv img" ).each(function( index ) {
    $(this).parents('.filterDiv').hover(function(){ //mouseenter
      console.log("hello");
      $(this).find(".overlay").removeClass('fadeOut');    
        $(this).find(".overlay").show(); 
        $(this).find(".overlay").addClass('animated fadeIn');         
    }, function(){ //mouseleave
      $(this).find(".overlay").hide(); 
         $(this).find(".overlay").removeClass('animated fadeIn');    
       $(this).find(".overlay").addClass('animated fadeOut'); 
    });
});



$( ".peopleimage img" ).each(function( index ) {
    $(this).parents('.peopleimage').hover(function(){ //mouseenter
      console.log("hello");
      $(this).find(".overlay").removeClass('fadeOut');    
        $(this).find(".overlay").show(); 
        $(this).find(".overlay").addClass('animated fadeIn');         
    }, function(){ //mouseleave
      $(this).find(".overlay").hide(); 
         $(this).find(".overlay").removeClass('animated fadeIn');    
       $(this).find(".overlay").addClass('animated fadeOut'); 
    });
});


$('.accordion-header').toggleClass('inactive-header');
  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });
  return false;
});






/*google map*/
(function($) {
/*
*  new_map
*
*  This function will render a Google Map onto the selected jQuery element
*
*  @type  function
*  @date  8/11/2013
*  @since 4.3.0
*
*  @param $el (jQuery element)
*  @return  n/a
*/
function new_map( $el ) {
  // var
  var $markers = $el.find('.marker');
  // vars
  var args = {
    zoom    : 16,
    center    : new google.maps.LatLng(0, 0),
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  // create map           
  var map = new google.maps.Map( $el[0], args);
  // add a markers reference
  map.markers = [];
  // add markers
  $markers.each(function(){
      add_marker( $(this), map );
  });
  // center map
  center_map( map );
  // return
  return map;
}
/*
*  add_marker
*
*  This function will add a marker to the selected Google Map
*
*  @type  function
*  @date  8/11/2013
*  @since 4.3.0
*
*  @param $marker (jQuery element)
*  @param map (Google Map object)
*  @return  n/a
*/
function add_marker( $marker, map ) {
  // var
  var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
  // create marker
  var marker = new google.maps.Marker({
    position  : latlng,
    map     : map
  });
  // add to array
  map.markers.push( marker );
  // if marker contains HTML, add it to an infoWindow
  if( $marker.html() )
  {
    // create info window
    var infowindow = new google.maps.InfoWindow({
      content   : $marker.html()
    });
    // show info window when marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open( map, marker );
    });
  }
}
/*
*  center_map
*
*  This function will center the map, showing all markers attached to this map
*
*  @type  function
*  @date  8/11/2013
*  @since 4.3.0
*
*  @param map (Google Map object)
*  @return  n/a
*/
function center_map( map ) {
  // vars
  var bounds = new google.maps.LatLngBounds();
  // loop through all markers and create bounds
  $.each( map.markers, function( i, marker ){
    var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
    bounds.extend( latlng );
  });
  // only 1 marker?
  if( map.markers.length == 1 )
  {
    // set center of map
      map.setCenter( bounds.getCenter() );
      map.setZoom( 16 );
  }
  else
  {
    // fit to bounds
    map.fitBounds( bounds );
  }
}
/*
*  document ready
*
*  This function will render each map when the document is ready (page has loaded)
*
*  @type  function
*  @date  8/11/2013
*  @since 5.0.0
*
*  @param n/a
*  @return  n/a
*/
// global var
var map = null;
$(document).ready(function(){
  $('.acf-map').each(function(){
    // create map
    map = new_map( $(this) );
  });
});
})(jQuery);
