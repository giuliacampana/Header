const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/header");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error:"));
db.once("open", () => console.log("db connected successfully!"));



