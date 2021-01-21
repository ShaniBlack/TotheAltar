var bcrypt = require("bcrypt-nodejs");

module.exports = function (Sequelize, DataTypes) {
    let Login = Sequelize.define("Login", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}