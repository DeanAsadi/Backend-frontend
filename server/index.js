require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Error from Massive ", err));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(` Listening on port ${port} `));
