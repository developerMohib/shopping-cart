import axios, { AxiosInstance } from "axios";

const instance : AxiosInstance = axios.create({
    baseURL  : 'https://localhost:5000'
})
export default instance;