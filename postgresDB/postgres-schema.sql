CREATE TABLE hostels (
  hostel_id int NOT NULL PRIMARY KEY,
  hostel_name text,
  features boolean[],
  street_name text,
  photos text[],
  location_id int REFERENCES locations (location_id)
);

CREATE TABLE locations (
  location_id int PRIMARY KEY NOT NULL,
  city_name varchar(255),
  country_name varchar(255)
);