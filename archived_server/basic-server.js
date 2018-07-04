// const express = require("express");

// const app = express();
// const bodyParser = require("body-parser");
// const path = require("path");
// const db = require("../db/db.js");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	next();
// });

// app.use(express.static(path.join(__dirname, "../public")));
// app.use("/:id", express.static(path.join(__dirname, "../public")));

// app.get("/api/locations/hostels/:id/info", (req, res) => {
//   db.Hostel.find({ id: req.params.id })
// 	.then(data => {
// 		res.send(data);
// 	})
// 	.catch(error => {
// 		console.log("error in GET HostelInfo IN SERVER", error);
// 		res.send(error);
// 	})
// });

// app.post("/api/locations/hostels/:id/info", (req, res) => {
//   db.Hostel.find({ id: req.params.id })
//     .then(data => {
// 	  // write database function to handle post request
// 	  res.send('successfully added to the database');
// 	})
// 	.catch(error => {
// 	  console.log("error in GET HostelInfo IN SERVER");
// 	  res.send(error);
// 	})
// });

// app.put("/api/locations/hostels/:id/info", (req, res) => {
//   db.Hostel.find({ id: req.params.id })
//     .then(data => {
// 	  // write database function to handle put request 
// 	  res.send('Updated hostel info');
// 	})
// 	.catch(error => {
// 	  console.log("error in PUT HostelInfo IN SERVER");
// 	  res.send(error);
// 	})
// })

// app.delete("/api/locations/hostels/:id/info", (req, res) => {
// 	db.Hostel.find({ id: req.params.id })
// 	  .then(data => {
// 		// write database function to handle delete request
// 		res.send('Deleted piece of information');
// 	  })
// 	  .catch(error => {
// 		console.log("error in DELETE HostelInfo IN SERVER");
// 		res.send(error);
// 	  })
//   })

// app.get("/api/locations/:id/info", (req, res) => {
//   db.Location.find({ id: req.params.id })
//   .then(data => {
// 	res.send(data);  
//   })
//   .catch(error => {
// 	console.log("error in GET LocationInfo IN SERVER", error);
// 	res.send(error);
//   })
// });

// app.get("/locations/hostels", (req, res) => {
// 	db.Location.find()
// 	  .then(data => {
// 	  	res.send(data);
// 	  })
// 	  .catch(error => {
// 		console.log("error in Search IN SERVER", error);
// 		res.send(error);
// 	  })
// });


// app.listen(3001, () => console.log("Header listening at 3001"));
