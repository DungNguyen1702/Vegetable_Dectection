require('dotenv').config();
const cloudinary  = require("../../config/cloudinary.config");
const objectCleaner = require("../../helpers/object-cleaner");
const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

const { getAll, create, update, getUserByID } = require('../CRUD/user');

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

async function updateAva(request, response) {
    try {
        const {id} = request.body

        if (!request.file) {
            return response.status(400).json({ error: "No image provided" });
        }

        const fileBuffer = request.file.buffer;

        await cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: "pbl4" },
            async (error, result) => {
                if (error) {
                    return response.status(500).json({ error: 'Error uploading image to Cloudinary' });
                }

                const updateUser = {
                    avatar : result.url,
                }

                update(updateUser, id); 

                const getUpdateUser = await getUserByID(id)
                return response.status(200).json({ message: 'update successfully', result : getUpdateUser })
            }
        ).end(fileBuffer);
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function updateInfo(request, response) {
    try {
        const {id, name, gender, birthday, telephone, address} = request.body

        const updateUser = objectCleaner.clean({
            name : name, 
            telephone : telephone,
            address : address,
            gender : gender,
            birthday : birthday,
        })

        console.log(updateUser)

        await update(updateUser, id);

        const getUpdateUser = await getUserByID(id)
        return response.status(200).json({ message: 'update successfully', result : getUpdateUser })
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

async function updatePassword(request, response) {
    try {
        
        const {id, old_password, new_password_1, new_password_2} = request.body
        
        const user = await getUserByID(id);
        
        const isPasswordValid = await hashHelper.compare(
            old_password,
            user.password.trim()
        );

        if (!isPasswordValid) {
            return response.status(401).json({
                message: "Sai mật khẩu cũ",
            });
        }

        if (new_password_1 !== new_password_2) {
            return response.status(409).json({
                message: "Mật khẩu 1 khác mật khẩu 2",
            });
        }

        const updateUser = objectCleaner.clean({
            password: hashHelper.hash(new_password_1),
        })

        await update(updateUser, id);

        const getUpdateUser = await getUserByID(id)
        return response.status(200).json({ message: 'update successfully', result : getUpdateUser })
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = {
    getUsers : index,
    updateAvatar : updateAva,
    updateInfo : updateInfo,
    updatePassword : updatePassword,
}