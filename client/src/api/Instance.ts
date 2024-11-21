import axios, { AxiosInstance } from "axios";
//shopping-cart-server-eta.vercel.app
// https://hello-shop-server.vercel.app
const instance: AxiosInstance = axios.create({
    baseURL: 'https://hello-shop-server.vercel.app'
})
export default instance;