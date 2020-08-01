const CryptoJS = require("crypto-js");

const key = 'useyourkey'

// Encrypt 加密
export function encrypt(text){
  return CryptoJS.AES.encrypt(text, key).toString();
}


// Decrypt 解密
export function decrypt(cipherText){
  let bytes = CryptoJS.AES.decrypt(cipherText, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

