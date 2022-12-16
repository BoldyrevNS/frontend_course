const bcrypt = require('bcryptjs')
const {User} = require('../../models/association')
const jwt = require("jsonwebtoken");
const jwt_secret = require('../../config/default.json')


const login = async (req, res) => {

    try {


        const {email, password } = req.body

        const user = await User.findOne({where: {email: `${email}`}})

        if (user === null) {
            // res.status(404);
            return res.json({
                message: 'такого пользователя не существует'
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            // res.status(404);
            return res.json({
                message: 'неверный пароль'
            })
        }

        const token = jwt.sign({
                id: user.id
            }, jwt_secret.jwt_secret,
            {expiresIn: '30d'}
        )


        res.json({
            token, user, message: 'Log In'
        })


    }
    catch (e) {
        console.log(e)
    }
}


module.exports = {
    login
}