import axios, { AxiosInstance } from "axios";
//shopping-cart-server-eta.vercel.app
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})
export default instance;