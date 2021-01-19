
-- Inserts into login table
INSERT INTO login (username, password, user_id) values ("robsan", "5D41402ABC4B2A76B9719D911017C592", 1);
 
-- Inserts into Users table
INSERT INTO users (first_name, last_name, email, member, login_id) values ("Karen", "Smith", "ksmith@gmail.com", true, 1);
 
 -- Inserts into Event Table
 INSERT INTO event (event_name, event_date, bride_groom1, bride_groom2, budget, estimated_guests, user_id) values ("Jack and Jill's Wedding", "2021-05-25", "Jack", "Jill", 30000, 500, 1);

-- Inserts into Category Table
INSERT INTO category (name) 
values ("Catering"),("Venue"),("Florist"),("Music"),("Bakery"),("Officiator"),("Jeweler"),("Bridal Gown Shop"),("Grooms Tuxido Shop"),("Bridal Party Gowns"),("Rentals"),("Travel"),("Miscellaneous");
 
-- Inserts into Vendor Table
INSERT INTO vendor (event_id, category_id, date_id, vendor_name, contact_name, address_id, phone_number, email, projected_cost, actual_cost, contract, img, notes)
values (1,1,"2021-02-01", "Olive Garden", "Luigi", 1, "214-512-3142", "olive@olivegarden.com", 1200, 1350, "contract.pdf", "img01.png", "Salad, Chicken Alfredo, and Spaghetti is all we would get!!"),
(1,1,"2021-02-02", "Austin's Barbeque", "Austin", 1, "903-434-2152", "austin@austinbbq.com", 900, 1050, "contract.pdf", "img01.png", "Brisket, Pulled Pork, Potatoe Salad, and Baked Beans would be our choices"),
(1,2,"2021-02-03", "Plano Event Center", "Janet Murphy", 1, "972-941-5840", "planoeventcenter@plano.gov", 18000, 22000, "contract.pdf", "img01.png", "Love the layout and includes Security, Valet Parking. "),
(1,1,"2021-02-04", "Floral Moral in Plano", "Billy", 1, "972-959-2152", "billy@floralmoral.com", 700, 679, "contract.pdf", "img01.png", "These guys can provide orchids, bouquets, and floral arrangment for church. B"),
(1,1,"2021-02-15", "First Baptist Church of Plano", "Ethel Mertz", 1, "972-525-1122", "emertz@firstbcp.com", 700, 875, "contract.pdf", "img01.png", "We would have to take marital classes.")
;

 -- Inserts into Address table
 INSERT INTO address (line1, line2, city, state, zip, country) values ("123 Nowhere St.", "suite 211", "Plano", "TX", 75253, "US");

-- Inserts into Payment Table
INSERT INTO payment (vendor_id, type, date, amount, paid) values (1,"Catering", "2021-03-15", 1200, false);

-- Inserts into Calendar Table
INSERT INTO calendar (title, vendor_id, date, start_time, end_time, notes) 
values ("Food Tasting", 1, "2021-02-15", "15:00:00", "16:30:00", "Make sure I don't eat on this day to eat for free!!"),
("Food Tasting", 2, "2021-02-15", "19:00:00", "20:30:00", "Great chance to talk about free sides"),
("Site Visit", 3, "2021-02-16", "13:00:00", "14:30:00", "Ask about amenities and decoration possibilities"),
("Visit Church", 5, "2021-02-14", "14:00:00", "15:30:00", "Talk about fees, dates, and floral arrangments.");
