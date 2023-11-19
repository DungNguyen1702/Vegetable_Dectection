import axios from 'axios'
import queryString from 'query-string'

 const axiosClient = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

export default axiosClient;