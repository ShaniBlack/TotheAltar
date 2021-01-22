module.exports = function (Sequelize, DataTypes) {
    let Event = Sequelize.define("Event", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        event_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        bride_groom1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bride_groom2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        budget: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estimated_guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

        Event.associate=function(models){
            Event.belongsTo(models.Users)
        }
    }