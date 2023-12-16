import axios from "axios";
import { toast } from "react-hot-toast";
import { getDecryptedLocalStorage } from "src/helper/EncryptLocalStorage";

const YgbkApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

YgbkApi.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (config && config.headers && config.url !== "login") {
      config.headers["Authorization"] = `Bearer ${getDecryptedLocalStorage(
        "token"
      )}`;

      // config.headers["Content-Type"] = "application/json";
    }
    return config;
  }
  // (error) => {
  //   // Do something with request error
  //   return Promise.reject(error);
  // }
);

YgbkApi.interceptors.response.use(
  (response) => {
    // Do something with response success
    return response;
  },
  async (error) => {
    // Do something with response error
    const errorData = error?.response;

    if (errorData?.status === 401) {
      toast.error("Sesi anda telah habis, harap login kembali!");
      // Redirect if Unauthenticated
      if (localStorage.getItem("token")) {
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/";
        }, 1000);
      }
    }
    return Promise.reject(error);
  }
);

export default YgbkApi;
