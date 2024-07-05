document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderCustom: function (swiper, current, total) {
        return current + ' of ssssssssssssssss' + total;
      }
    },
  });

  const Myswiper = document.querySelector(".swiper").swiper;

  // Now you can use all slider methods like
  Myswiper.slideNext();
});



