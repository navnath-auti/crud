const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");

const port = 3000;
const app = express();

mongoose
  .connect("mongodb://localhost:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("Database Connection is successfull..."))
  .catch((err) => console.log(err));

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

const newAccount = new Account({
  name: "Navnath Auti",
  email: "navnath-auti@gmail.com",
  mobileNumber: 123456789,
});

newAccount
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./route/Route");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Blog app listeniing at port http://localhost:${port}`);
});
