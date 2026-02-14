const fs = require('fs');
const path = require('path');

const imagePath = path.join(
  process.env.USERPROFILE || '',
  '.cursor', 'projects', 'c-Users-0saka-OneDrive-Desktop-cursor', 'assets',
  'c__Users_0saka_AppData_Roaming_Cursor_User_workspaceStorage_a1943f5dadaf3d4a58623866f7c29d03_images_photo_2025-11-18_12-06-28-d5e0d064-86a1-433a-95ce-e39fa7756e06.png'
);

const indexPath = path.join(__dirname, 'index.html');

if (!fs.existsSync(imagePath)) {
  console.error('Фото не найдено по пути:', imagePath);
  process.exit(1);
}

const imgBuffer = fs.readFileSync(imagePath);
const base64 = imgBuffer.toString('base64');
const dataUrl = 'data:image/png;base64,' + base64;

let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(
  /src="photo_funanki\.png"/,
  'src="' + dataUrl + '"'
);
fs.writeFileSync(indexPath, html);
console.log('Готово: фото встроено в index.html. Обновите страницу в браузере.');
