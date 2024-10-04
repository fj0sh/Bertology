import axios from "axios";
import { headers } from "next/headers";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: { "Content-Type": "application/json" },
});

export default instance;
