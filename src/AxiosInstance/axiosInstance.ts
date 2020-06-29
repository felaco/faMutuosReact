import Axios from 'axios';

export const URLS = {
    GAINERS: '/gainers',
    FUNDS_DETAIL: '/fund/'
}

const axiosInstance = Axios.create({baseURL: '/api'})

export default axiosInstance;