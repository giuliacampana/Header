const models = require("../../db/db.js");
const mongoose = require("mongoose");

beforeEach(async () => {
	let db = await mongoose.connect("mongodb://localhost/header");
});

afterEach(async () => {
	mongoose.connection.close(() => {
		console.log("db from test disconnected");
	});
});

describe("database collection", () => {
	describe("Locations", () => {
		test('Should contain city called Verkhniy Lomov"', () => {
			models.Location.find({ city: "Verkhniy Lomov" }, (err, city) => {
				if (err) {
					console.log(err);
				} else {
					expect(city).toEqual({
						_id: ObjectId("5b17730548d8213707c82785"),
						hostels: [
							{ id: "48-292-6650" },
							{ id: "58-444-2778" },
							{ id: "56-865-0348" }
						],
						id: 99,
						city: "Verkhniy Lomov",
						country: "Russia",
						country_code: "RU",
						__v: 0
					});
				}
			});
		});

		test("location collections should have 100 documents", () => {
			models.Location.count((err, total) => {
				if (err) {
					console.log(err);
				} else {
					expect(total).toEqual(100);
				}
			});
		});
	});
});
