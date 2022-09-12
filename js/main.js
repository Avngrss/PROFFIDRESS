const owl = $(".owl-carousel");

owl.owlCarousel({
  loop: true,
  margin: 20,
  startPosition: 0,
  items: 1,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1200: {
      items: 2,
      nav: true,
      loop: true,
    },
  },
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
