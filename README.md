VSCODE에서 git clone https://github.com/Clockingjun/react-practice.git


------------------------------
internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module 'react'
------------------------------
Start시 위 에러 발생하면

rm -rf node_modules ->
npm install
하면됨.
