
-- Inserts into login table
INSERT INTO logins (username, password, createAt, User_id) values ("robsan", "5D41402ABC4B2A76B9719D911017C592", "2021-01-22 13:59:59", 1);
 
-- Inserts into Users table
INSERT INTO users (first_name, last_name, email) values ("Karen", "Smith", "ksmith@gmail.com");
 
 -- Inserts into Event Table
 INSERT INTO events (event_name, event_date, bride_groom1, bride_groom2, budget, estimated_guests, User_id) values ("Jack and Jill's Wedding", "2021-05-25", "Jack Norris", "Jill McClain", 30000, 500, 1);

INSERT INTO vendorevent (EventId, VendorId) values (1,1),(1,2),(1,3),(1,4),(1,5);

 
-- Inserts into Vendor Table
INSERT INTO vendors (category, vendor_name, contact_name, address, phone_number, email, projected_cost, actual_cost, contract, notes)
values ("Catering", "Olive Garden", "Luigi", "123 Somewhere St., Plano, TX 75222", "214-512-3142", "olive@olivegarden.com", 1200, 1350, "contract.pdf", "Salad, Chicken Alfredo, and Spaghetti is all we would get!!"),
("Catering", "Austin's Barbeque", "Austin", "123 Anywhere St., Plano, TX 75222", "903-434-2152", "austin@austinbbq.com", 900, 1050, "contract.pdf", "Brisket, Pulled Pork, Potatoe Salad, and Baked Beans would be our choices"),
("Venue", "Plano Event Center", "Janet Murphy", "555 Downwhere St., Plano, TX 75222", "972-941-5840", "planoeventcenter@plano.gov", 18000, 22000, "contract.pdf", "Love the layout and includes Security, Valet Parking."),
("Florist""2021-02-04", "Floral Moral in Plano", "Billy", "3333 Butwhere St., Plano, TX 75222", "972-959-2152", "billy@floralmoral.com", 700, 679, "contract.pdf", "These guys can provide orchids, bouquets, and floral arrangment for church."),
("Venue", "First Baptist Church of Plano", "Ethel Mertz", "123 Nowhere St., Plano, TX 75222", "972-525-1122", "emertz@firstbcp.com", 700, 875, "contract.pdf", "We would have to take marital classes.")
;

-- Inserts into Category Table
-- INSERT INTO category (name) 
-- values ("Catering"),("Venue"),("Florist"),("Music"),("Bakery"),("Officiator"),("Jeweler"),("Bridal Gown Shop"),("Grooms Tuxido Shop"),("Bridal Party Gowns"),("Rentals"),("Travel"),("Miscellaneous");

--  -- Inserts into Address table
--  INSERT INTO address (line1, line2, city, state, zip, country) values ("123 Nowhere St.", "suite 211", "Plano", "TX", 75253, "US");

-- -- Inserts into Payment Table
-- INSERT INTO payment (vendor_id, type, date, amount, paid) values (1,"Catering", "2021-03-15", 1200, false);

-- -- Inserts into Calendar Table
-- INSERT INTO calendar (title, vendor_id, date, start_time, end_time, notes) 
-- values ("Food Tasting", 1, "2021-02-15", "15:00:00", "16:30:00", "Make sure I don't eat on this day to eat for free!!"),
-- ("Food Tasting", 2, "2021-02-15", "19:00:00", "20:30:00", "Great chance to talk about free sides"),
-- ("Site Visit", 3, "2021-02-16", "13:00:00", "14:30:00", "Ask about amenities and decoration possibilities"),
-- ("Visit Church", 5, "2021-02-14", "14:00:00", "15:30:00", "Talk about fees, dates, and floral arrangments.");
