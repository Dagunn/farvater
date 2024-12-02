document.querySelectorAll('.news__tabs-button').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;


    document.querySelectorAll('.news__tabs-button').forEach(btn => btn.classList.remove('news__tabs-button--active'));


    button.classList.add('news__tabs-button--active');


    document.querySelectorAll('.news__tabs-panel').forEach(panel => panel.classList.remove('news__tabs-panel--active'));


    document.querySelector(`.news__tabs-panel[data-tab-content="${tab}"]`).classList.add('news__tabs-panel--active');
  });
});



document.querySelectorAll('.news__pagination-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });


  const paginationLinks = document.querySelectorAll('.news__pagination-link');
  const prevArrow = document.querySelector('.news__pagination-arrow--prev');
  const nextArrow = document.querySelector('.news__pagination-arrow--next');

  let currentIndex = 0;


  function updateActivePage(newIndex) {

    paginationLinks[currentIndex].classList.remove('news__pagination-link--active');


    currentIndex = newIndex;
    paginationLinks[currentIndex].classList.add('news__pagination-link--active');
  }


  paginationLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      updateActivePage(index);
    });
  });


  prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      updateActivePage(currentIndex - 1);
    }
  });

  nextArrow.addEventListener('click', () => {
    if (currentIndex < paginationLinks.length - 1) {
      updateActivePage(currentIndex + 1);
    }
  });

});


