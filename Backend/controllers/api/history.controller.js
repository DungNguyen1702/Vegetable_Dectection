require('dotenv').config();
const cloudinary  = require("../../config/cloudinary.config");

const { createHistory, showHistoryByUserId } = require('../CRUD/history');

async function createNewHistory(request, response)
{
    try {

        if (!request.file) {
            return response.status(400).json({ error: "No image provided" });
        }

        const {user_id , fruit_id} = request.body;

        const fileBuffer = request.file.buffer;

        await cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: "PBL4" },
            (error, result) => {
                if (error) {
                    return response.status(500).json({ error: 'Error uploading image to Cloudinary' });
                }
                createHistory({user_id : user_id, fruit_id: fruit_id, image : result.url })
                response.status(200).json({ message: 'Image uploaded successfully', result });
            }
        ).end(fileBuffer);

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function getHistoryByUserId(request, response)
{
    try {
        const {id} = request.params;

        const result = await showHistoryByUserId(id);
        console.log(result)

        return response.status(200).json({result : result})

    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    createNewHistory : createNewHistory,
    getHistoryByUserId : getHistoryByUserId,
}