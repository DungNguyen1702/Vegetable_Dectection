import axiosClient from "./axiosClient";
import axios from "axios";

const fruitAPI = {
    allFruit: async () => {
        const url = "/api/fruit/";
        return await axiosClient.application.get(url);
    },

    getFruitById: async (id) => {
        const url = `/api/fruit/${id}`;
        return await axiosClient.application.get(url);
    },

    predictFruit: async (image) => {

        const formData = new FormData();

        formData.append("image", {
            uri: image,
            type: 'image/jpeg', 
            name: 'test.jpg',
        });

        try {
            return await axiosClient.formData.post("/api/fruit/predict_fruit", formData);   
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error("Error uploading image:", error);
            return error;
        }
    },
};

export default fruitAPI;
