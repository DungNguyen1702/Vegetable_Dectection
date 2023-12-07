import axiosClient from './axiosClient'

const userAPI = {
    getUserById: async (id) => {
        const url = '/api/user/user_by_id/' + id
        return await axiosClient.application.get(url)
    },
    updateInfo: async (user) => {
        const url = '/api/user/update_info/'
        return await axiosClient.application.put(url,user)
    },
    updatePassword: async (password) => {
        const url = '/api/user/update_password/'
        return await axiosClient.application.put(url,password)
    },
}

export default userAPI
