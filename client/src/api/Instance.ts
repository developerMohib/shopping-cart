import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
    baseURL: 'https://shopping-cart-with-ts-server.vercel.app'
})
export default instance;