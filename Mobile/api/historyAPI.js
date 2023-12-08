import axiosClient from "./axiosClient";

const historyAPI = {
    createHistory: async (image, fruit_id, user_id) => {

        const formData = new FormData();

        formData.append("image", {
            uri: image,
            type: 'image/jpeg', 
            name: 'test.jpg',
        });
        formData.append("user_id", user_id)
        formData.append("fruit_id", fruit_id)
        
        const url = "api/history/create/";
        return await axiosClient.formData.post(url,formData);
    },
    getHistory : async(id)=>{
        const url = "api/history/" + id;
        return await axiosClient.application.get(url);
    }
};

export default historyAPI;
