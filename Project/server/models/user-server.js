const {DataTypes} = require("sequelize");

const UserServer = sequelize.define('UserServer', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
}, {
    timestamps: false,

})

module.exports = {UserServer}