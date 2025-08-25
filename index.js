document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex);
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-menu');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.remove('collapsed');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.add('collapsed');
  });
});
