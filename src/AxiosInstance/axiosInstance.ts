import Axios from 'axios';

export const URLS = {
    GAINERS: '/gainers'
}

const axiosInstance = Axios.create({baseURL: '/api'})

export default axiosInstance;