const {DataTypes} = require('sequelize');


const Type = sequelize.define('type', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: true,
        unique: false
    },
    icon: {
        type: DataTypes.STRING(300),
    },
},{
    timestamps: false,
})

module.exports={Type}