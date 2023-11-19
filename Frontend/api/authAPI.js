import axiosClient from './axiosClient'
import axios from 'axios'

const auth = {
    login: async (credentials) => {
        // console.log('base URL:', axiosClient.defaults.baseURL);
        const url = '/api/auth/login'
        return await axiosClient.post(url,credentials)
    },
}

export default auth
