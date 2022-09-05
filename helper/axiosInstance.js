import axios from "axios";
import { API } from "../config";

const axiosInstance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default axiosInstance;
