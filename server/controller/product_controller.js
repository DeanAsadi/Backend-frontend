module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    const { name, description, price, image_url } = req.body;
    db.create_product([name, description, price, image_url])
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
    const { id } = req.params;
    db.read_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => console.log("READ ONE Product Error ", err));
  },

  update: (req, res, next) => {
    const db = req.app.get("db");
    const { params, query } = req;
    console.log("query.d", query.d);
    db.update_product([params.id, query.d])
      .then(() => res.sendStatus(200))
      .catch(err => console.log("UPDATE  Product Error ", err));
  },

  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => console.log("DELETE  Product Error ", err));
  }
};
