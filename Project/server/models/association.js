const {Server} = require('./server')
const {User} = require('./user')
const {Type} = require('./type')
const {TypeServer} = require('./type-server')
const {UserServer} = require('./user-server')

Type.hasMany(Server);
Server.belongsTo(Type);

Server.belongsToMany(User, {through:UserServer})
User.belongsToMany(Server, {through:UserServer})

Server.hasMany(UserServer);
UserServer.belongsTo(Server);

module.exports={
    Server,
    Type,
    User,
    TypeServer,
    UserServer,
}