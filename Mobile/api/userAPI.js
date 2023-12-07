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
    updateAvatar: async (avatar, id) => {
        const url = '/api/user/update_avatar/'
        
        const formData = new FormData();
        formData.append("image", {
            uri: avatar,
            type: 'image/jpeg', 
            name: 'test.jpg',
        });
        formData.append("id", id)

        try {
            return await axiosClient.formData.put(url, formData);   
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error("Error uploading avatar:", error);
            return error;
        }
    },
}

export default userAPI
