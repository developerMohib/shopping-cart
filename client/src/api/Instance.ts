import axios, { AxiosInstance } from "axios";
//shopping-cart-server-eta.vercel.app
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
})
export default instance;