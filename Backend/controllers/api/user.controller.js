require('dotenv').config();
const cloudinary  = require("../../config/cloudinary.config");

const { getAll, updateAvatar } = require('../CRUD/user');

async function index(request, response) {
    try {
        const page = Number.parseInt(request.query.page);
        const limit = Number.parseInt(request.query.limit);

        const startIndex = (page - 1) * limit;
        
        const queryResult = await getAll(startIndex, limit);

        queryResult.count = queryResult.rows.length
        return response.status(200).json(queryResult);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function changeAvatar(request, response) {
    try {

        if (!request.file) {
            return response.status(400).json({ error: "No image provided" });
        }

        const {id} = request.body;

        const fileBuffer = request.file.buffer;

        await cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: "PBL4" },
            (error, result) => {
                if (error) {
                    return response.status(500).json({ error: 'Error uploading image to Cloudinary' });
                }
                updateAvatar(id, {avatar : result.url})
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

async function changePassword(request, response)
{

}

async function changeInfo(request, response)
{
    
}

module.exports = {
    getUsers : index,
    changeAvatar : changeAvatar,
    changePassword : changePassword,
    changeInfo : changeInfo
}