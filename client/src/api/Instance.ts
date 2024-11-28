import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
    // baseURL: 'https://shopping-cart-with-ts-server.vercel.app'
    baseURL: 'http://localhost:4000'
})
export default instance;