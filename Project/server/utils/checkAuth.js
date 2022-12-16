const jwt = require('jsonwebtoken')
const jwt_secret = require('../config/default.json')


const checkAuth = (req,res,next)=>{
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'')


    if(token){

        try{
            const decoded = jwt.verify(token, jwt_secret.jwt_secret)

            req.userId = decoded.id


            next()
        }catch (e) {
            return res.json({
                message:'нет доступа'
            })
        }


    }else {
        return res.json({
            message:'нет доступа'
        })
    }
}

module.exports = {checkAuth}