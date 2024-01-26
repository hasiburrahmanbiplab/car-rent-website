$('.rental-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 1500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
    });

$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 1500,
    });

    // max-w-72 overflow-hidden