/**
 * Фото:
 * — Локально (file://): из папки uploads/ рядом с index.html/menswear.html (в той же папке, что и сайт)
 * — На сайте (https): из папки uploads/ в репозитории
 */
(function () {
  function getBasePath() {
    var path = location.pathname || '';
    if (path.indexOf('.html') !== -1) path = path.slice(0, path.lastIndexOf('/') + 1);
    else if (path.length && path[path.length - 1] !== '/') path = path + '/';
    return path || '/';
  }

  function getPhotoUrl(filename) {
    if (location.protocol === 'file:') {
      return location.origin + getBasePath() + 'uploads/' + filename;
    }
    return (location.origin || '') + getBasePath() + 'uploads/' + filename;
  }

  window.TatePhotos = {
    load: function (callback) {
      if (callback) callback(null, {
        hero: getPhotoUrl('hero.png'),
        menswear_0: getPhotoUrl('menswear_0.png'),
        menswear_1: getPhotoUrl('menswear_1.PNG'),
        menswear_2: getPhotoUrl('menswear_2.PNG'),
        menswear_3: getPhotoUrl('menswear_3.PNG'),
        menswear_4: getPhotoUrl('menswear_4.PNG')
      });
    },
    save: function (slot, file, callback) {
      if (!file || !file.type.match(/^image\//)) {
        if (callback) callback(new Error('Not an image'), null);
        return;
      }
      if (callback) callback(new Error('Положите файлы в папку uploads рядом с index.html'), null);
    }
  };
})();
