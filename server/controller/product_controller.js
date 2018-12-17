module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    db.create_product()
      .then(() => res.status(200))
      .catch(err => console.log("Create Product Error ", err));
  }
};
