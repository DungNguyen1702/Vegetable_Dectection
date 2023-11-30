const axios = require("axios");
require("dotenv").config();
const FormData = require("form-data");

const uploadImage = async (imageBuffer) => {
    const formData = new FormData();
    
    formData.append("file", imageBuffer, {
        filename: "image.jpg",
        contentType: "image/jpeg",
    });

    try {
        const axiosResponse = await axios.post(
            process.env.DEPLOY_URL + "api/fruit/predict_fruit",
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                },
            }
        );

        return axiosResponse.data.result;
    } catch (error) {
        console.error("Error predicting image:");
        throw error;
    }
};

module.exports = {
    uploadImage: uploadImage,
};