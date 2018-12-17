module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    db.create_product()
      .then(() => res.sendStatus(200))
      .catch(err => console.log("Create Product Error ", err));
  },
  getAll: (req, res, next) => {
    const db = req.app.get("db");
    db.read_products()
      .then(products => res.status(200).send(products))
      .catch(err => console.log("READ ALL Product Error ", err));
  },
  getOne: (req, res, next) => {
    const db = req.app.get("db");
    db.read_product()
      .then(product => res.status(200).send(product))
      .catch(err => console.log("READ ONE Product Error ", err));
  },
  update: (req, res, next) => {
    const db = req.app.get("db");
    db.update_product()
      .then(() => res.sendStatus(200))
      .catch(err => console.log("UPDATE  Product Error ", err));
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    db.delete_product()
      .then(() => res.stsendStatusatus(200))
      .catch(err => console.log("DELETE  Product Error ", err));
  }
};
