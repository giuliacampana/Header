const faker = require('faker');
const fs = require('fs');

let hostelId;
let locationId = 1;
let photoNum = 1;


const createHostelsCSV = () => {
  for (hostelId = 9000001; hostelId < 10000001; hostelId++) {
    if (photoNum === 1001) {
      photoNum = 1;
    }
    if (locationId === 10001) {
      locationId = 1;
    }

    let newEntry = hostelId + '|' + faker.company.companyName() + '|"{' + faker.random.boolean() + ',' + faker.random.boolean() + '}"|' + faker.address.streetAddress() + `|"{https://s3.amazonaws.com/travelinn-header/${photoNum}.jpeg, https://s3.amazonaws.com/travelinn-header/${photoNum + 1}.jpeg, https://s3.amazonaws.com/travelinn-header/${photoNum + 2}.jpeg, https://s3.amazonaws.com/travelinn-header/${photoNum + 3}.jpeg, https://s3.amazonaws.com/travelinn-header/${photoNum + 4}.jpeg}"|` + locationId + '\n';

    try {
      fs.appendFileSync('./postgresDB/dataFiles/hostels_10.txt', newEntry, 'utf8');
    } catch (error) {
      console.log(error);
    }

    photoNum += 5;
    locationId++;
  }
}

createHostelsCSV();

module.exports = {
  createPhotos,
}
