const {Router} = require("express");
const {discover, searchServer, addUserToServer, filterServer} = require("../controllers/server/servers");
const {checkAuth} = require("../utils/checkAuth");

const discoverRouter = new Router()

discoverRouter.get('/discover',checkAuth, discover)

discoverRouter.get('/discover/search',checkAuth, searchServer)

discoverRouter.put('/discover',checkAuth, addUserToServer)

discoverRouter.get('/discover/filter',checkAuth, filterServer)

module.exports={

    discoverRouter
}