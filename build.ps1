echo 'node -v 14.*.* expected, continue...';
pause;
npm i -g electron-packager;
electron-packager . --platform=all --asar --icon=icon.ico;
pause;