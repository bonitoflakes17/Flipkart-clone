let scrollImages = document.querySelector('.scroll-images');
let speed = 2;
let scrollPos = 0;

setInterval(function() {
  scrollPos += speed;
  scrollImages.style.transform = 'translateX(-' + scrollPos + 'px)';
}, 30);
