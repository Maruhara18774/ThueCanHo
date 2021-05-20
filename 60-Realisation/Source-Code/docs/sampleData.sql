INSERT INTO QUOCGIA(TEN_QUOCGIA)
VALUES
('Vietnam'), --1
('American'); --2

INSERT INTO THANHPHO(ID_QUOCGIA, TEN_THANHPHO)
VALUES
(1,N'Hồ Chí Minh'), --1
(1,N'Lâm Đồng'), --2
(1,N'Hà Nội'), --3
(1,N'Đà Nẵng'), --4
(2,'New York'), --5
(2,'Washington DC'); --6

INSERT INTO QUAN(ID_THANHPHO, TEN_QUAN)
VALUES
(1,N'Quận 1'), --1
(1,N'Quận 2'), --2
(1,N'Quận 3'), --3
(1,N'Quận 4'), --4
(1,N'Quận 5'), --5
(1,N'Quận 6'), --6
(1,N'Quận 7'), --7
(1,N'Quận Tân Bình'), --8
(1,N'Quận Bình Tân'), --9
(2,N'Thành phố Đà Lạt'), --10
(2,N'Huyện Đức Trọng'), --11
(2,N'Thành phố Bảo Lộc'), --12
(3,N'Quận Đống Đa'), --13
(3,N'Hai Bà Trưng'), --14
(3,N'Quận Ba Đình'), --15
(3,N'Quận Hoàn Kiếm'), --16
(4,N'Huyện Hòa Vang'), --17
(4,N'Quận Sơn Trà'), --18
(4,N'Quận Ngũ Hành Sơn'), --19
(5,N'Brooklyn'), --20
(5,N'Texas'), --21
(6,N'Norant'), --22
(6,N'Dallas'); --23

INSERT INTO TAIKHOAN(TEN_TAIKHOAN,MATKHAU,ROLE_TAIKHOAN)
VALUES
(N'nhattrung92','abc@1234','Partner'), --1
(N'nguyenha11','abc@1234','Customer'), --2
(N'vivanho33','admin','Admin'), --3
(N'tranquynhh','abc@1234','Partner'), --4
(N'lucasdio3201','abc@1234','Partner'), --5
(N'vannam254','abc@1234','Customer'); --6

INSERT INTO THONGTINCHUHO(TEN_CHUHO,EMAIL,PHONE_NUMBER,MA_GIAYTOTUYTHAN,LOAI_GIAYTOTUYTHAN,QUOCTICH,GIOITINH,DIACHI, MASO_THUE,ID_TAIKHOAN)
VALUES
(N'Nguyễn Nhật Trung','nhattrung92@gmail.com','032155422','52323665','CCCD','Vietnam','Nam',N'99 Nguyễn Văn Cừ, Tân Bình, HCM','23231320032',1), --1
(N'Lucas de France Dio','lucasdio3201@gmail.com','032155422','52323665','Passport','Vietnam','Nam',N'99 Wall Street, Washington DC, DC','23231320032',5); --2

INSERT INTO BANGGIA(MUCGIA_MOT,MUCGIA_HAI,MUCGIA_BA,KHUYENMAI)
VALUES
(2500000,2450000,230000,200000), --1
(4500000,4450000,4300000,100000), --2
(3800000,3560000,3300000,0); --3

INSERT INTO LOAINHA(TEN_LOAINHA)
VALUES
(N'Căn hộ'), --1
(N'Biệt thự'), --2
(N'Homestay'); --3

INSERT INTO TRANGTHAINHA(TEN_TRANGTHAI)
VALUES
(N'Đang sửa chữa'), --1
(N'Sẵn sàng'), --2
(N'Đang được thuê'), --3
(N'Ngừng kinh doanh'); --4

INSERT INTO STYLE(TEN_STYLE)
VALUES
(N'Cổ điển'), --1
(N'Hiện đại'), --2
(N'Thiên nhiên'), --3
(N'Sang trọng'); --4

INSERT INTO NHA(ID_NHA,ID_TT_CHUHO,ID_LOAINHA,TEN_NHA,FREE_CANCEL,CHECKIN,CHECKOUT,KHOANGCACH_TRUNGTAMTP,SOTANG,PHUPHI_BUASANG,SONHA,TEN_DUONG,DIENTICH,ID_QUAN,SO_NGUOI,SO_GIUONGPHU,ID_BANGGIA,ID_TRANGTHAI_NHA)
VALUES
('CANHO01',1,1,N'Căn hộ Blue Bubberry trung tâm Hà Nội',1,'07:45','16:00',0,2,90000,'12/8/78',N'Chùa Láng',20,13,9,2,1,2), --1
('BIETTHU0215',1,2,N'Biệt thự Golden Time Đà Lạt',0,'06:45','17:00',120,1,70000,'99/71',N'Đường Mơ',20,10,5,1,2,2), --2
('BIETTHUHUONGBIEN',2,2,N'Biệt thự Dolphin Brooklyn Mỹ',1,'07:45','20:00',0,2,90000,'16 St.',N'Flamingo',20,13,9,2,3,2); --3

INSERT INTO STYLENHA(ID_NHA,ID_STYLE)
VALUES
('CANHO01',2),
('BIETTHU0215',4),
('BIETTHUHUONGBIEN',4);