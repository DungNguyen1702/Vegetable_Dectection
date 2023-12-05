import axiosClient from './axiosClient'

const auth = {
    login: async (credentials) => {
        const url = '/api/auth/login'
        return await axiosClient.application.post(url,credentials)
    },
}

export default auth
