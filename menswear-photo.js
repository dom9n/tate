/**
 * Menswear: подстановка фото в карточки из данных TatePhotos.
 * Ожидает слоты menswear_0 … menswear_4 в объекте, который возвращает TatePhotos.load().
 */
(function () {
  // Все карточки в сетке (на этой странице — 5 штук)
  var cards = document.querySelectorAll('.product-grid .product-card');

  // Без глобального API фото ничего не делаем
  if (!window.TatePhotos) return;

  // Ждём загрузки данных и подставляем URL в каждую карточку
  window.TatePhotos.load(function (err, data) {
    if (!data) return;

    cards.forEach(function (card) {
      // data-index задаёт номер слота: 0 … 4 → menswear_0 … menswear_4
      var index = card.getAttribute('data-index');
      if (index === null) return;

      var slot = 'menswear_' + index;
      var imgEl = card.querySelector('.product-card__image');
      var url = data[slot];

      if (!imgEl || !url) return;

      // Первая карточка — <img>: ставим src
      if (imgEl.tagName === 'IMG') {
        imgEl.src = url;
      } else {
        // Остальные — <div>: фон через background-image
        imgEl.style.backgroundImage = 'url(' + url + ')';
      }
    });
  });
})();
