$('#banner-slied').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    smartSpeed:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('#testimonial').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



  AOS.init({
    offset: 200, 
    duration: 2000,
  });

