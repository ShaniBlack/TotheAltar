DROP THE DATABASE IF EXISTS tothealtar;

CREATE DATABASE tothealtar;

CREATE TABLE user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    member BOOLEAN,
    login_id INT
),

CREATE TABLE login (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR(15) NOT NULL,
    user_id INT
),

CREATE TABLE event (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR NOT NULL,
    event_date DATE,
    budget INT,
    user_id INT NOT NULL,
),

CREATE TABLE address (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    line1 VARCHAR,
    line2 VARCHAR,
    city VARCHAR,
    state VARCHAR(2),
    zip INT(5),
    country VARCHAR
),

CREATE TABLE category (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR NOT NULL
),

CREATE TABLE payment (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    vendor_id INT NOT NULL,
    type VARCHAR NOT NULL,
    date DATE NOT NULL,
    amount INT NOT NULL,
    paid BOOLEAN
),

CREATE TABLE vendor (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    category_id INT,
    date_id DATE,
    vendor_name VARCHAR,
    contact_name VARCHAR,
    phone_number INT,
    email VARCHAR,
    address_id INT,
    projected_cost INT,
    actual_cost INT,
    contract VARCHAR,
    img VARCHAR,
),

CREATE TABLE calendar (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR,
    vendor_id INT,
    date DATE,
    start_time TIME,
    end_time TIME,
)
