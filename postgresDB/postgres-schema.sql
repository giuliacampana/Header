CREATE DATABASE travelinn-header;

DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS hostels;

CREATE TABLE locations (
  location_id int PRIMARY KEY NOT NULL,
  city_name varchar(255),
  country_name varchar(255)
);

CREATE TABLE hostels (
  hostel_id int NOT NULL PRIMARY KEY,
  hostel_name text,
  features boolean[],
  street_name text,
  photos text[],
  location_id int REFERENCES locations (location_id)
);

CREATE INDEX ON hostels (location_id);
CREATE INDEX ON locations (city_name);

CREATE MATERIALIZED VIEW hostel_query AS SELECT hostel_name, features, street_name, photos, hostels.location_id, city_name, country_name FROM hostels FULL OUTER JOIN locations ON hostels.location_id = locations.location_id;
CREATE INDEX ON hostel_query (hostel_id);
