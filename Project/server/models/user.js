const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    birth: {
        type: DataTypes.STRING(200),
        // type: DataTypes.DATEONLY,
    }
}, {
    timestamps: false,
    tableName: 'user'
})

module.exports = {User}