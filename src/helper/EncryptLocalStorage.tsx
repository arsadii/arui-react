import CryptoJS from "crypto-js";

const SECRET_KEY: string = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;

export function setEncryptedLocalStorage(name: string, data: any): void {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  localStorage.setItem(name, encrypted);
}

export function getDecryptedLocalStorage(name: string): any {
  const encrypted = localStorage.getItem(name) ?? "";

  let decrypted = "";

  if (encrypted.length) {
    decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    );
  }

  if (decrypted.length) {
    return JSON.parse(decrypted);
  }
  return {};
}
