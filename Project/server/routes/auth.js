const {Router} = require("express");
const {registration} = require("../controllers/auth/registration");
const {login} = require("../controllers/auth/login")
const {me} = require("../controllers/auth/me")
const {checkAuth} = require("../utils/checkAuth");


const authRouter = new Router()

// authRouter.get('/registration', async (req, res) => {
//
//     res.render('auth/Registration', {
//         url: 'http://localhost:3001/api/registration',
//         res: 'POST',
//         success: false,
//         name: '',
//         email: '',
//         password: '',
//         birth: '',
//     })
// })

authRouter.post('/registration', registration)

authRouter.post('/login', login)

authRouter.get('/me',checkAuth, me)

module.exports = {
    authRouter
}

