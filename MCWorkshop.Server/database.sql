create table StorageList (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Number VARCHAR(20),
    Plate VARCHAR(10),
    Pickup BIT,
    Year CHAR(4)
);

INSERT INTO StorageList (Name, Number, Plate, Pickup, Year)
VALUES ("Maxwell", "+472345323", "RF8495", 1, "2025");

create table Inventory (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ProductPicture VARCHAR(100),
    ProductName VARCHAR(100),
    ProductId VARCHAR(100),
    Stock INT
);

insert into Inventory (ProductPicture, ProductName, ProductId, Stock)
values ("hiflofilter.png", "Hiflo racing oil filter", "HF138RC", 4),
("biltemagrease.jpg", "Biltema Grease", "36-30003", 2),
("glykol.jpg", "Etylen Glykol (Pre-mixed)", "36-0609", 3),
("motul10-40w.jpg", "Motual 10-40W 4L", "N/A", 7);

create table Bike (
    Id int auto_increment primary key,
    Picture varchar(100),
    Model varchar(20),
    Brand varchar(50),
    Km int,
    Des varchar(255),
    Price decimal (10,2)
);

insert into Bike (Picture, Model, Brand, Km, Des, Price)
values ("mt09.png", "MT-09", "Yamaha", 38000, "2015 Yamah MT-09. Comes with full system and saddle bags. Was an amazing bike but its time for it to go", 7000 ),
("zx10r.png", "ZX-10R", "Kawasaki", 10000, "I want to buy this bike one day it looked way better then the S1k", 0.69),
("r3.png", "R3", "Yamaha", 42000, "Alis bike but I stole it so now im selling it", 5500),
("r6.png", "R6", "Yamaha", 100000, "Radnom bke I found kinda old but who knows", 6000),
("cbr600rr.png", "CBR-600RR", "Honda", 45000, "Gfs bike also stole it big Yoink", 5000),
("s1k.png", "S1000", "BMW", 0, "Brand new big forhead bike", 10000);
