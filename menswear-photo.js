(function () {
  var cards = document.querySelectorAll('.product-grid .product-card');

  if (!window.TatePhotos) return;

  window.TatePhotos.load(function (err, data) {
    if (!data) return;
    cards.forEach(function (card) {
      var index = card.getAttribute('data-index');
      if (index === null) return;
      var slot = 'menswear_' + index;
      var imgEl = card.querySelector('.product-card__image');
      var url = data[slot];
      if (imgEl && url) {
        imgEl.style.backgroundImage = 'url(' + url + ')';
      }
    });
  });
})();
