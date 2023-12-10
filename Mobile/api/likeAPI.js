import axiosClient from "./axiosClient";

const likeAPI = {
    getLikeFruit: async (id) => {
        const url = "/api/like/like_fruit/" + id;
        return (await axiosClient.application.get(url)).data;
    },

    deleteLikeFruit: async (fruit_id, user_id) => {
        const url = `api/like/delete_like_fruit/?fruit_id=${fruit_id}&user_id=${user_id}`;
        return await axiosClient.application.delete(url);
    },

    createLikeFruit: async (fruit_id, user_id) => {
        const url = `api/like/create_like_fruit/?fruit_id=${fruit_id}&user_id=${user_id}`;
        return await axiosClient.application.put(url);
    },

    getLikeDish: async (fruit_id, user_id) => {
        const url = "/api/like/like_dish/?fruit_id=" + fruit_id + "&user_id=" + user_id;
        return (await axiosClient.application.get(url)).data;
    },

    deleteLikeDish: async (dish_id, user_id) => {
        const url = `api/like/delete_like_dish/?dish_id=${dish_id}&user_id=${user_id}`;
        return await axiosClient.application.delete(url);
    },

    createLikeDish: async (dish_id, user_id) => {
        const url = `api/like/create_like_dish/?dish_id=${dish_id}&user_id=${user_id}`;
        return await axiosClient.application.put(url);
    },

    getLikeDishByUserID: async (user_id) => {
        const url = "/api/like/like_dishes_by_user_id/" + user_id;
        return (await axiosClient.application.get(url)).data;
    },
};

export default likeAPI;
