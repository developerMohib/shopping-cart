import axios, { AxiosInstance } from "axios";
//shopping-cart-server-eta.vercel.app
const instance: AxiosInstance = axios.create({
    baseURL: 'http://shopping-cart-server-eta.vercel.app'
})
export default instance;