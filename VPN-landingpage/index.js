$(".customer-comment").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

const toggle = document.querySelector(".menu-toggle");
const header_menu = document.querySelector(".header-menu");
toggle.addEventListener("click", function () {
  console.log(toggle);
  header_menu.classList.add("is_show");
});
window.addEventListener("click", function (e) {
  if (!header_menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    header_menu.classList.remove("is_show");
  }
});
