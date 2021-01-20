module.exports = function (sequelize, DataTypes) {
  let Vendor = sequelize.define("Vendor", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_name: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        len: [1, 50],
      },
    },
    address: {
        type: DataTypes.STRING,
    },
    projected_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actual_cost: {
      type: DataTypes,
      INTEGER,
    },
    contract: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
  });

  Vendor.associate=function(models){
      Vendor.belongsTo(models.Event)
  }
};
