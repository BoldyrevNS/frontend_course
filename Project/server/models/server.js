const {DataTypes} = require('sequelize');


const Server = sequelize.define('server', {

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
    description: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false
    },
    countOfOnline: {
        type: DataTypes.INTEGER,
    },
    preview: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    icon: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
},{
    timestamps: false,
})



module.exports={Server}