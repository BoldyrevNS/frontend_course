const {DataTypes} = require("sequelize");

const TypeServer = sequelize.define('TypeServer', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    }
},{
    timestamps: false,
})



module.exports={TypeServer}