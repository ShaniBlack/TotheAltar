module.exports = function (Sequelize, DataTypes) {
    let Users = Sequelize.define("Users", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              isEmail: true,
              len: [1, 50],
            },
        },
        // member: {
        //     type: DataTypes. BOOLEAN,
        //     allowNull: false
        // },
    });

    Users.associate=function(models){
        Users.belongsTo(models.Login)
    }
    }
