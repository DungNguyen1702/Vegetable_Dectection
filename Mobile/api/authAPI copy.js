import axiosClient from './axiosClient'

const userAPI = {
    updateInfo: async (user) => {
        const url = '/api/user/update_info/'
        return await axiosClient.application.put(url,user)
    },
}

export default userAPI
