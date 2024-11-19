const CryptoJS = require("crypto-js");

const authKey = process.env.NEXT_PUBLIC_SECRET;

const encrypter = (text: any) => {
  const cipherText = CryptoJS.AES.encrypt(text, authKey).toString();
  return cipherText;
};

const decrypter = (cipherText: any) => {
  const decrypt = CryptoJS.AES.decrypt(cipherText, authKey).toString(
    CryptoJS.enc.Utf8
  );

  return decrypt;
};

export { encrypter, decrypter };
