const axios = require("axios");
require("dotenv").config();
const FormData = require("form-data");

const predictImage = async (imageBuffer) => {
    const formData = new FormData();
    
    formData.append("file", imageBuffer, {
        filename: "image.jpg",
        contentType: "image/jpeg",
    });

    try {
        const axiosResponse = await axios.post(
            process.env.PREDICT_LINK,
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                },
            }
        );

        return axiosResponse.data.name;
    } catch (error) {
        console.error("Error predicting image:");
        throw error;
    }
};

module.exports = {
    predictImage: predictImage,
};