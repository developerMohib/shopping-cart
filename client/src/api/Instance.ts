import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://shopping-cart-server-eta.vercel.app'
})
export default instance;