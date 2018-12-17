require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const productCtrl = require("./controller/product_controller");

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Error from Massive ", err));

// Products End Points------------------------------------
app.get("/api/products", productCtrl.getAll);
app.get("/api/product/:id", productCtrl.getOne);
app.post("/api/product", productCtrl.create);
app.put("/api/product/:id", productCtrl.update);
app.delete("/api/product/:id", productCtrl.delete);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(` Listening on port ${port} `));
