const owl = $(".owl-carousel");

owl.owlCarousel({
  loop: true,
  margin: 20,
  startPosition: 0,
  items: 1,
  responsive: {
    540: {
      items: 1,
      startPosition: 0,
    },
    1200: {
      items: 2,
      margin: 30,
    },
  },
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
