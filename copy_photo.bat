@echo off
chcp 65001 >nul
set "SRC=C:\Users\0saka\.cursor\projects\c-Users-0saka-OneDrive-Desktop-cursor\assets\c__Users_0saka_AppData_Roaming_Cursor_User_workspaceStorage_a1943f5dadaf3d4a58623866f7c29d03_images_photo_2025-11-18_12-06-28-d5e0d064-86a1-433a-95ce-e39fa7756e06.png"
set "DEST=%~dp0photo_funanki.png"
copy /Y "%SRC%" "%DEST%" && echo Фото скопировано. Обновите страницу в браузере. && pause
if errorlevel 1 echo Не удалось скопировать. Положите фото в папку с index.html и назовите photo_funanki.png && pause
