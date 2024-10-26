const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Следующий слайд'
  }
});
