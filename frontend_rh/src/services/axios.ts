import axios from "axios";
import type { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
});

export default instance;
