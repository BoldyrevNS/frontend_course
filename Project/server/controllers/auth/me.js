const {User} = require('../../models/association')
const jwt = require("jsonwebtoken");
const jwt_secret = require("../../config/default.json")

const me = async (req, res) => {
    try {

        const user = await User.findByPk(req.userId)

        if (!user) {
            return res.json({
                message: 'такого юзера не существует'
            })
        }

        const token = jwt.sign({
                id: user.id
            }, jwt_secret.jwt_secret,
            {expiresIn: '30d'}
        )

        res.json({
            token,
            user
        })

    } catch (e) {
        res.json({message: 'нет доступа'})
    }
    // try {
    //
    //     // const user = users.filter(user=>user.id===req.params.id)
    //     const user = users.find(user=>user.id===parseInt(req.params.id))
    //
    //     if (user){
    //
    //         res.json({
    //             message:'пользователь есть',
    //             user,
    //         })
    //     }
    //     else{
    //
    //         res.status(404);
    //         res.json({
    //             message:'пользователя нет',
    //
    //         })
    //     }
    // }
    // catch (e) {
    //     console.log(e)
    // }
}


module.exports = {
    me
}