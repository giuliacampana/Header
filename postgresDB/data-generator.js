const faker = require('faker');
const fs = require('fs');
const axios = require('axios');

let hostelId = 1;
let locationId = 1;
let photoNum = 1;

const getAPIPhotos = () => {
	axios.get("https://api.unsplash.com/search/photos?per_page=30&query=travel&client_id=54008d4032d0467ec44b27e6e2ab76efbf4e6b8a449cd18ea4bf29ca9946620c")
      .then(response => {
        const res = response.data.results.splice(1, 6);
        let container = [];
        res.forEach(photo => {
          container.push(photo.urls.regular);
        });
        createHostelsCSV(container);
      });
};

const createHostelsCSV = (photoArray) => {
  for (hostelId = 1; hostelId < 10000001; hostelId++) {
    if (photoNum === 1001) {
      photoNum = 1;
    }
    if (locationId === 10001) {
      locationId = 1;
    }

    let newEntry = hostelId + '|' + faker.company.companyName() + '|"{' + faker.random.boolean() + ',' + faker.random.boolean() + '}"|' + faker.address.streetAddress() + `|"{` + photoArray[0] + ',' + photoArray[1] + ',' + photoArray[2] + ',' + photoArray[3] + ',' + photoArray[4] + `}"|` + locationId + '\n';

    try {
      fs.appendFileSync('./postgresDB/hostels.txt', newEntry, 'utf8');
    } catch (error) {
      console.log(error);
    }

    photoNum += 5;
    locationId++;
  }
};

const createLocationsCSV = () => {
  for (locationId = 1; locationId < 10001; locationId++) {
    let newLocation = locationId + '|' + faker.address.city + '|' + faker.address.country;

    try {
      fs.appendFileSync('./postgresDB/locations.txt');
    } catch (error) {
      console.log(error);
    }
  }
}

getAPIPhotos();
createLocationsCSV();

module.exports = {
  getAPIPhotos,
  createHostelsCSV,
  createLocationsCSV,
}
