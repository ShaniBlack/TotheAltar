const db = require("../models");

// Defining methods for the vendorController
module.exports = {
  findAll: function (req, res) {
    db.Vendor.findAll(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findByPk: function (req, res) {
    db.Vendor.findByPk(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Vendor.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update22: function (req, res) {
    db.Vendor.findByPk({ _id: req.params.id })
      .then((dbModel) => dbModel.update())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Vendor.update({
      where: { id: { $in: ids } },
    })
      .then((dbVendor) => {
        const updatePromises = dbVendor.map((dbVendor) => {
          return dbVendor.updateAttributes(updates);
        });
        return db.Sequelize.Promise.all(updatePromises);
      })
      .then((updatedVendor) => {
        res.json(updatedVendor);
      });
  },
  delete: function (req, res) {
    const id = req.params.id;
    db.Vendor.destroy({
      where: { id: id },
    }).then((deletedVendor) => {
      res.json(deletedVendor);
    });
  },
};
