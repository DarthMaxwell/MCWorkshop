create table Storage (
    Id int auto_increment primary key,
    Name varchar(100) not null,
    Phone varchar(20) not null,
    Plate varchar(10) not null,
    Pickup bit not null,
    Year CHAR(4) not null
);

insert into Storage (Name, Phone, Plate, Pickup, Year)
values ("Maxwell", "+472345323", "RF8495", 1, "2025");

create table Inventory (
    Id int auto_increment primary key,
    Picture varchar(100),
    Name varchar(100) not null,
    ItemId varchar(100) not null,
    Stock int not null
);

insert into Inventory (Picture, Name, ItemId, Stock)
values ("hiflofilter.png", "Hiflo racing oil filter", "HF138RC", 4),
("biltemagrease.jpg", "Biltema Grease", "36-30003", 2),
("glykol.jpg", "Etylen Glykol (Pre-mixed)", "36-0609", 3),
("motul10-40w.jpg", "Motual 10-40W 4L", "N/A", 7);

create table Bike (
    Id int auto_increment primary key,
    Picture varchar(100),
    Model varchar(20) not null,
    Brand varchar(50) not null,
    Km int,
    Des text,
    Price decimal (10,2)
);

insert into Bike (Picture, Model, Brand, Km, Des, Price)
values ("mt09.png", "MT-09", "Yamaha", 38000, "2015 Yamah MT-09. Comes with full system and saddle bags. Was an amazing bike but its time for it to go", 7000 ),
("zx10r.png", "ZX-10R", "Kawasaki", 10000, "I want to buy this bike one day it looked way better then the S1k", 0.69),
("r3.png", "R3", "Yamaha", 42000, "Alis bike but I stole it so now im selling it", 5500),
("r6.png", "R6", "Yamaha", 100000, "Radnom bke I found kinda old but who knows", 6000),
("cbr600rr.png", "CBR-600RR", "Honda", 45000, "Gfs bike also stole it big Yoink", 5000),
("s1k.png", "S1000", "BMW", 0, "Brand new big forhead bike", 10000);

create table Booking (
    Id int auto_increment primary key,
    Name varchar(100) not null,
    Email varchar(255) not null,
    Phone varchar(20) not null,
    Bike varchar(100) not null,
    Km varchar(10),
    Details Text not null,
    Date date not null
);

insert into Booking (Name, Email, Phone, Bike, Km, Details, Date) values
('Alice Johnson', 'alice@example.com', '555-1234', 'Yamaha MT-07', '12000', 'Regular service check', '2025-10-10'),
('Bob Smith', 'bob.smith@example.com', '555-5678', 'Honda CBR500R', '8500', 'Brake pad replacement', '2025-10-10'),
('Charlie Davis', 'charlie.davis@example.com', '555-8765', 'Kawasaki Ninja 650', '15000', 'Oil change and filter replacement', '2025-10-10'),
('Diana Martinez', 'diana.m@example.com', '555-2468', 'Suzuki GSX-S750', '22000', 'Clutch adjustment', '2025-10-10'),
('Ethan Brown', 'ethan.brown@example.com', '555-1357', 'BMW R1250GS', '18000', 'Tire replacement', '2025-10-10'),
('Frank Wilson', 'frank@example.com', '555-2001', 'Ducati Monster 821', '5000', 'Chain lubrication', '2025-10-11'),
('Grace Lee', 'grace@example.com', '555-2002', 'Triumph Street Triple', '7000', 'Battery check', '2025-10-11'),
('Henry Adams', 'henry@example.com', '555-2003', 'Harley Davidson Iron 883', '3000', 'Exhaust inspection', '2025-10-11');
