const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

const { getUserByAccount, create } = require("../CRUD/user");

async function register(request, response) {
    try {
        if (
            !request.body.account ||
            !request.body.password ||
            !request.body.password2
        ) {
            return response.status(409).json({
                message: "Thiếu thông tin",
            });
        }

        if (request.body.password !== request.body.password2) {
            return response.status(409).json({
                message: "Mật khẩu 1 khác mật khẩu 2",
            });
        }

        // Check if email already registered
        const dbUser = await getUserByAccount(request.body.account);
        if (dbUser) {
            return response.status(409).json({
                message: "Tài khoản này đã tồn tại",
            });
        }

        const {
            name,
            account,
            password,
            telephone,
            address,
            gender,
            birthday,
        } = request.body;

        // Create new user
        const newUser = {
            name: name,
            account: account,
            password: hashHelper.hash(password),
            telephone: telephone,
            address: address,
            gender: gender,
            avatar: "http://res.cloudinary.com/deei5izfg/image/upload/v1701871973/Mobile/cczzpjd46rabctcoeje8.jpg",
            birthday: birthday,
        };

        create(newUser).then((result) => {

            return response.status(200).json({
                message: "Create user successfully!",
                result: result
            });
        });
    } catch (error) {
        return response.status(500).json({
            message: "Something went wrong!",
            error: error,
        });
    }
}

module.exports = register;
