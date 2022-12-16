const bcrypt = require('bcryptjs')
const {User} = require('../../models/association')
const jwt = require("jsonwebtoken");
const jwt_secret = require('../../config/default.json')



const registration = async (req, res) => {

    try {

        const {name, email, password, birth} = req.body

        if (email==='' || password==='') {

            return res.json({
                message: 'поле не заполнено',
                success:false
            })
        }


        const isEmail = await User.findOne({where: {email: `${email}`}})

        if (isEmail !== null) {
            return res.json({
                message: 'email занят',
                success:false
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await User.create({
            name: `${name}`,
            email: `${email}`,
            password: `${hash}`,
            birth: `${birth}`
        })

        const token = jwt.sign({
                id: newUser.id
            }, jwt_secret.jwt_secret,
            {expiresIn: '30d'}
        )

        res.json({
            success:true,
            newUser,
            message: 'Регистрация прошла успешно',
            token: token
        })

    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    registration
}


// {
//     "name": "Маша",
//     "email": "m1",
//     "password": "123",
//     "dateBirth": "191200"
// }