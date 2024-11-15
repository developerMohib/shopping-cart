import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3333'
})
export default instance;