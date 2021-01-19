DROP DATABASE IF EXISTS tothealtar;

CREATE DATABASE tothealtar;

USE tothealtar;

CREATE TABLE users (

    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    member BOOLEAN,
    login_id INT
);

CREATE TABLE login (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    user_id INT
);

CREATE TABLE event (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(50) NOT NULL,
    event_date DATE,
    bride_groom1 VARCHAR(100) NOT NULL,
    bride_groom2 VARCHAR(100) NOT NULL,
    budget INT,
    estimated_guests INT,
    user_id INT NOT NULL
);

CREATE TABLE address (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    line1 VARCHAR(50),
    line2 VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(2),
    zip INT,
    country VARCHAR(2)
);

CREATE TABLE category (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE payment (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    vendor_id INT NOT NULL,
    type VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    amount INT NOT NULL,
    paid BOOLEAN
);

CREATE TABLE vendor (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    category_id INT,
    date_id DATE,
    vendor_name VARCHAR(50),
    contact_name VARCHAR(50),
    phone_number VARCHAR(50),
    email VARCHAR(50),
    address_id INT,
    projected_cost INT,
    actual_cost INT,
    contract VARCHAR(50),
    img VARCHAR(50),
    notes VARCHAR(250)
);

CREATE TABLE calendar (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    vendor_id INT,
    date DATE,
    start_time TIME,
    end_time TIME,
    notes VARCHAR(250)
)
