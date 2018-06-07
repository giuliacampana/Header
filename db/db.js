const mockLocationsData = require("./mockLocationsData.json");
const mockHostelData = require("./mockHostelData.json");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/header");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error:"));
db.once("open", () => console.log("db connected successfully!"));

const hostelSchema = mongoose.Schema({
	id: String,
	location_id: Number,
	hostel_name: String,
	street_name: String,
	features: Array,
	photos: Array
});

const Hostel = mongoose.model("Hostel", hostelSchema);

// for (let i = 0; i < mockHostelData.length; i += 1) {
// 	const currentHostel = mockHostelData[i];
// 	const newHostel = new Hostel({
// 		id: currentHostel.id,
// 		location_id: currentHostel.location_id,
// 		hostel_name: currentHostel.hostel_name,
// 		street_name: currentHostel.street_name,
// 		features: currentHostel.features,
// 		photos: currentHostel.photos
// 	});


// 	newHostel.save((err, product) => {
// 		if (err) throw err;
// 	});
// }

const locationSchema = mongoose.Schema({
	id: Number,
	city: String,
	country: String,
	country_code: String,
	hostels: Array
});

const Location = mongoose.model("Location", locationSchema);

// for (let i = 0; i < mockLocationsData.length; i += 1) {
// 	const current = mockLocationsData[i];
// 	const newLocation = new Location({
// 		id: current.id,
// 		city: current.city,
// 		country: current.country,
// 		country_code: current.country_code,
// 		hostels: current.hostels
// 	});

// 	newLocation.save((err, product) => {
// 		if (err) throw err;
// 	});
// }


module.exports.Hostel = Hostel;
module.exports.Location = Location;
