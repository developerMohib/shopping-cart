import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://shopping-cart-server-eta.vercel.app'
    // baseURL: 'http://localhost:3000'
})
export default instance;