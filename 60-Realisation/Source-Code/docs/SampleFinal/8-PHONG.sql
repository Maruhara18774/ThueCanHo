--PHONG (xem lai MOTA)
--LOAI GIUONG
INSERT LOAIGIUONG (TEN_LOAIGIUONG) VALUES ('Single'),
('Double'),
('Queen size'),
('King size'),
('Super king size'),
('Extra bed');
INSERT LOAIGIUONG (TEN_LOAIGIUONG) VALUES ('None')

--LOAIPHONG
INSERT LOAIPHONG (TEN_LOAIPHONG) VALUES ('Standard'),
('Deluxe'),
('Suite'),
('Junior Suite'),
('Executive Suite');

--NOI THAT
INSERT NOITHAT(TEN_NOITHAT) VALUES ('Room and Laundry'),
('Food and Drink'),
('Entertaiment'),
('Room Configuration & Access'),
('Bathroom & Pool');

--CHI TIET NOI THAT
INSERT CHITIETNOITHAT(ID_NOITHAT, TEN_CT) VALUES 
(1,'Internet Access Lan Charges Apply'),
(1,'Hair Dryes'),
(1,'Dishwasher'),
(1,'In Room Safe'),
(1,'Mosquito Net'),
(1,'Air Conditioning'),
(1,'Ironing Facilities'),
(1,'Microwave'),
(1,'Internet Access Wifi Complimentary'),
(1,'Washing Machine'),
(1,'Blackout Curtains'),
(1,'Desk'),
(1,'Internet Access Lan Complimentary'),
(1,'Fan'),

(2,'Complimentary Bottled Water'),
(2,'Mini Bar'),
(2,'Refrigerator'),
(2,'Coffee Tea Maker'),
(2,'Breakfast'),
(2,'Lunch'),
(2,'Dinner'),

(3,'Daily Newspaper'),
(3,'Inhouse Movies'),
(3,'In Room Video Games'),
(3,'Television'),
(3,'Dvd Cd Player'),

(4,'Shared Bathroom'),
(4,'Balcony Terrace'),
(4,'Kitchenette'),
(4,'Non Smoking Rooms'),
(4,'Executive Lounge Access'),
(4,'Seating Area'),
(4,'Separate Dining Area'),
(4,'Interconnecting Rooms Available'),

(5,'Toiletries'),
(5,'Bathtub'),
(5,'Heated Water'),
(5,'Bathrobes'),
(5,'Private Bathroom'),
(5,'Private Pool'),
(5,'Shower');

-- TRANG THAI NHA
INSERT TRANGTHAINHA(TEN_TRANGTHAI) VALUES('UNDER REPAIR')
INSERT TRANGTHAINHA(TEN_TRANGTHAI) VALUES('READY')
INSERT TRANGTHAINHA(TEN_TRANGTHAI) VALUES('CURRENTLY USED')
INSERT TRANGTHAINHA(TEN_TRANGTHAI) VALUES('OUT OF ORDER')
--phong nha 1
INSERT INTO PHONG(ID_NHA,TEN_PHONG,ID_LOAIPHONG,ID_LOAIGIUONG,SOGIUONG,SONGUOITOIDA,SOGIUONG_PHU,CHIEUDAI_PHONG,CHIEURONG_PHONG,SOLUONG,MOTA)
VALUES	('1','PHONG CHINH',1,2,'1','5','0',10,5,'1','none'),
		('1','PHONG KHACH',2,7,'0','5','1',10,5,'1','none'),
		('1','PHONG VE SINH',1,7,'0','5','1',10,5,'1','none'),
		('1','PHONG BEP',2,7,'0','1','0',10,5,'1','none');

--phong nha 2
INSERT INTO PHONG(ID_NHA,TEN_PHONG,ID_LOAIPHONG,ID_LOAIGIUONG,SOGIUONG,SONGUOITOIDA,SOGIUONG_PHU,CHIEUDAI_PHONG,CHIEURONG_PHONG,SOLUONG,MOTA)
VALUES	('2','PHONG CHINH',1,3,'2','5','1',10,5,1,'none'),
		('2','PHONG KHACH',2,7,'0','5',1,10,5,'1','none'),
		('2','PHONG VE SINH',1,7,'0','5',0,10,5,'1','none'),
		('2','PHONG BEP',2,7,'0','1','0',10,5,'1','none');



