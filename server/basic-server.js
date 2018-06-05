const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");
//const db = require("../db/db.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/locations/hostels/hosetelId/pictures', (req,res) => {
	db.Hostel.find()
	.then((data) => {
		res.send(data);
	})
	.catch((error) => {
		console.log('error in GET PHOTOS IN SERVER', error);
	})
})

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3001, () => console.log("Header listening at 3001"));
