import axios from "axios";
import Cookies from "universal-cookie";
import { decrypter } from "../function/encrypter/encrypter";
import { useUser } from "@/providers/UserProvider";

const cookies = new Cookies();

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to dynamically set the Authorization header
instance.interceptors.request.use(
  async (config) => {
    const cookieVal = cookies.get("jwt_auth");
    let token: string | null = null;

    try {
      if (cookieVal) {
        const decryptedData = decrypter(cookieVal);
        const user = JSON.parse(decryptedData);

        // Ensure user contains token
        token = user?.token;
      }
    } catch (error) {
      console.error("Error decrypting or parsing jwt_auth cookie:", error);
    }

    // Set the Authorization header if token exists
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default instance;
