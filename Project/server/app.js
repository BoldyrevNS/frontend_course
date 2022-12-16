const express = require('express')
const connection = require('./config/database')
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const {authRouter} = require("./routes/auth");
const {discoverRouter} = require('./routes/server')
const {Server, Type, User, TypeServer, UserServer} = require('./models/association')
const cors = require('cors');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')


AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
    databases: [Server, Type, User, TypeServer, UserServer],
    rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

const port = 4000
const options = {explorer: true,definition: require('./swagger/swagger'),  apis: ["./swagger/api.js"], }
const specs = swaggerJsdoc(options);
const app = express()

app.use(adminBro.options.rootPath, router)

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.json())
app.use('/api', authRouter)
app.use('/api', discoverRouter)

app.use(express.static('content'))


async function start() {
    try {

        await connection.authenticate();
        console.log('Connection has been established successfully.');


        await Type.sync()
        await Server.sync()
        await User.sync()
        await TypeServer.sync()
        await UserServer.sync()

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (e) {
        console.log('error', e.message)
        process.exit()
    }
}

start()



