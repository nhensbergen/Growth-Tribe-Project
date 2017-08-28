$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay:true,
    loop:true,
    margin:15,
    responsiveClass: true, 
    responsive: {
    0: {
    items: 1
    },
    576: {
    items: 2
    },
    951: {
    items: 3
    }
    }
  })
});