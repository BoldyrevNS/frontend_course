const {Server, User, Type, UserServer} = require('../../models/association')
const {Op} = require("sequelize");


const filterServer = async (req, res) => {

    let servers

    if (!req.query.type){
        await discover(req, res)
    }
    else {
        servers = await Server.findAll({
            where: {
                '$typeId$': {[Op.eq]: req.query.type}
            },
            include: {model: User}
        })

        let userId = await req.userId

        if (userId){

            const serversOfUser = await UserServer.findAll({
                where:  {userId: userId}
            })

            servers= servers.map(item=>{
                if (serversOfUser.find(serverUser=>serverUser.dataValues.userId===userId && serverUser.dataValues.serverId===item.id) ){
                    return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:(item.users.length-1), currentUser:true  }
                }
                else {
                    return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length, currentUser:false  }
                }
            })
        }


        else {

            servers= servers.map(item=>{
                return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length, currentUser:false }
            })
        }

        res.json({
            success: true,
            category: req.query.type,
            servers
        })
    }
}

const addUserToServer = async (req, res) => {

    try {

        const {serverId} = req.body

        const currentUserServer = await UserServer.findOne({
            where: {
                [Op.and]: [{serverId: serverId}, {userId: req.userId}]
            }
        })

        if (currentUserServer) {

            await UserServer.destroy({
                where: {
                    serverId: serverId
                }
            });

            res.json({
                success: true,
                action: 'remove',
                server: serverId,
            })

        } else {
            await UserServer.create({serverId: serverId, userId: req.userId})

            res.json({
                success: true,
                action: 'add',
                server: serverId,
            })
        }


    } catch (e) {
        console.log(e)
    }
}

const discover = async (req, res) => {

    try {

        const {count, rows} = await Server.findAndCountAll({include: User})

        let servers = []

        let userId = await req.userId

        if (userId){

            const serversOfUser = await UserServer.findAll({
                where:  {userId: userId}
            })

            servers= rows.map(item=>{
                if (serversOfUser.find(serverUser=>serverUser.dataValues.userId===userId && serverUser.dataValues.serverId===item.id) ){
                    return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:(item.users.length-1), currentUser:true  }
                }
                else {
                    return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length, currentUser:false  }
                }
            })
        }

        else {

            servers= rows.map(item=>{
                return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length, currentUser:false }
            })
        }



        const type = await Type.findAll({include: Server})

        const types = [{name: 'All', serverCount: count,id:null}]
        type.forEach(item => {

            types.push({id:item.id,name: item.name, serverCount: item.servers.length})
        })


        if (!servers) {

            res.status(500).json({
                success: false
            })
        } else {


            res.json({
                success: true,
                servers,
                types
            })
        }

    } catch (e) {

        console.log(e)
    }
}

const searchServer = async (req, res) => {

    let servers
    if (req.query.name !== '') {

        servers = await Server.findAll({
            where: {
                name: {
                    [Op.startsWith]: req.query.name
                }
            },
            include: {model: User}
        })

        let userId = await req.userId

        if (userId){

            const serversOfUser = await UserServer.findAll({
                where:  {userId: userId}
            })

            servers= servers.map(item=>{
                if (serversOfUser.find(serverUser=>serverUser.dataValues.userId===userId && serverUser.dataValues.serverId===item.id) ){
                    return {id:item.id, name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length-1, currentUser:true  }
                }
                else {
                    return {id:item.id , name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length, currentUser:false  }
                }
            })
        }

        else {

            servers= servers.map(item=>{
                return {id:item.id,name:item.name,description:item.description,icon:item.icon, preview:item.preview, users:item.users.length, currentUser:false }
            })
        }

        if (servers.length) {

            res.json({
                success: true,
                servers
            })


        } else {

            res.json({
                success: false
            })
        }

    } else {
        await discover(req, res)
    }


}

module.exports = {
    discover, searchServer, addUserToServer, filterServer
}