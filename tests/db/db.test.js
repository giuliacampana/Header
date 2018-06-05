const models = require('../../db/db.js');
const mongoose = require('mongoose');

beforeEach(async () => {
	let db = await mongoose.connect('mongodb://localhost/header');
});

afterEach(async () => {
	mongoose.connection.close(()=> {
		console.log('db from test disconnected')
	})
})

describe('database collection', () => {
	describe('Locations', () => {
		test('Should contain city called Vladikavkaz', () => {
			models.Location.find({city: 'Vladikavkaz'}, (err,city) => {
				if (err) {
					console.log(err)
				} else {
					expect(city).toEqual(
						{ "_id" : ObjectId("5b16d3ca1d94c10743086605"), 
						  "hostels" : [ { "id" : "8890" }, { "id" : "5990" }, { "id" : "4732" }, { "id" : "1133" }, { "id" : "2572" } ],
						  "id" : 3361, 
						  "city" : "Vladikavkaz", 
						  "country" : "Russia", 
						  "country_code" : "RU",
						  "__v" : 0 	
						})
					}
			})
		})

		test('location collections should have 100 documents', () => {
			models.Location.count((err, total)=> {
				if (err) {
					console.log(err)
				} else {
					expect(total).toEqual(100);
				}
			})
		})
	})
})