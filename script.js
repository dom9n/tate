(function () {
  var img = document.getElementById('hero-img');
  var drop = document.getElementById('hero-drop');
  var fileInput = document.getElementById('hero-file');
  var chooseBtn = document.getElementById('hero-choose');

  function showPhoto(url) {
    img.src = url;
    drop.classList.remove('hero-drop--visible');
  }

  function onFile(file) {
    if (!file || !file.type.match(/^image\//)) return;
    if (window.TatePhotos) {
      window.TatePhotos.save('hero', file, function (err, url) {
        if (url) {
          showPhoto(url);
        } else {
          var reader = new FileReader();
          reader.onload = function () { showPhoto(reader.result); };
          reader.readAsDataURL(file);
        }
      });
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      showPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  }

  img.addEventListener('error', function () {
    drop.classList.add('hero-drop--visible');
  });

  img.addEventListener('load', function () {
    drop.classList.remove('hero-drop--visible');
  });

  function init() {
    if (window.TatePhotos) {
      window.TatePhotos.load(function (err, data) {
        if (data && data.hero) {
          img.src = data.hero;
          drop.classList.remove('hero-drop--visible');
        } else {
          drop.classList.add('hero-drop--visible');
        }
      });
    } else {
      drop.classList.add('hero-drop--visible');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  chooseBtn.addEventListener('click', function () { fileInput.click(); });
  fileInput.addEventListener('change', function () {
    if (fileInput.files[0]) onFile(fileInput.files[0]);
  });

  drop.addEventListener('dragover', function (e) {
    e.preventDefault();
    drop.classList.add('hero-drop--drag');
  });
  drop.addEventListener('dragleave', function () {
    drop.classList.remove('hero-drop--drag');
  });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    drop.classList.remove('hero-drop--drag');
    var file = e.dataTransfer.files[0];
    if (file) onFile(file);
  });
})();
