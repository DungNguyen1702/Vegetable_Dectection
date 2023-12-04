import axiosClient from "./axiosClient";
import axios from "axios";

const fruitAPI = {
    allFruit: async () => {
        const url = "/api/fruit/";
        return await axiosClient.get(url);
    },

    getFruitById: async (id) => {
        const url = `/api/fruit/${id}`;
        return await axiosClient.get(url);
    },

    predictFruit: async (image) => {

        // const url = process.env.EXPO_PUBLIC_API_URL + "/api/fruit/predict_fruit";
        
        const url = "http://localhost:8000/api/fruit/predict_fruit";
        
        const formData = new FormData();

        formData.append("image", image);

        console.log(formData)

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Cần đặt loại nội dung này để server hiểu rằng đang gửi dữ liệu hình ảnh
                },
            });

            return response.result;
        } catch (error) {
            // Xử lý lỗi ở đây
            console.error("Error uploading image:", error);
            return error;
        }
    },
};
export default fruitAPI;
