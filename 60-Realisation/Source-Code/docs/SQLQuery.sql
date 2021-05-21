-- Name: RENTALAPARTMENT
USE RENTALAPARTMENT

-- Các bảng giả dữ liệu profie

CREATE TABLE TAIKHOAN(
	ID_TAIKHOAN INT IDENTITY(1,1) PRIMARY KEY,
	TEN_TAIKHOAN VARCHAR(100) UNIQUE,
	MATKHAU VARCHAR(100),
	ROLE_TAIKHOAN VARCHAR(50)
)
CREATE TABLE THONGTINKHACHHANG(
	ID_TT_TAIKHOAN INT IDENTITY(1,1) PRIMARY KEY,
	TEN_KHACHHANG NVARCHAR(255),
	EMAIL VARCHAR(100),
	PHONE_NUMBER VARCHAR(20),
	MA_GIAYTOTUYTHAN VARCHAR(20),
	LOAI_GIAYTOTUYTHAN NVARCHAR(50),
	QUOCTICH VARCHAR(50),
	GIOITINH NVARCHAR(10),
	ID_TAIKHOAN INT,
	CONSTRAINT FK_THONGTINKHACHHANG_TAIKHOAN FOREIGN KEY(ID_TAIKHOAN) REFERENCES TAIKHOAN (ID_TAIKHOAN),
)
CREATE TABLE THONGTINCHUHO(
	ID_TT_TAIKHOAN INT IDENTITY(1,1) PRIMARY KEY,
	TEN_CHUHO NVARCHAR(255),
	EMAIL VARCHAR(100),
	PHONE_NUMBER VARCHAR(20),
	MA_GIAYTOTUYTHAN VARCHAR(20),
	LOAI_GIAYTOTUYTHAN NVARCHAR(50),
	QUOCTICH VARCHAR(50),
	GIOITINH NVARCHAR(10),
	DIACHI TEXT,
	MASO_THUE VARCHAR(20),
	ID_TAIKHOAN INT,
	CONSTRAINT FK_THONGTINCHUHO_TAIKHOAN FOREIGN KEY(ID_TAIKHOAN) REFERENCES TAIKHOAN (ID_TAIKHOAN),
)



-- Các bảng thật
CREATE TABLE BANGGIA(
	ID_BANGGIA INT IDENTITY(1,1) PRIMARY KEY,
	-- Giá thuê <= 4 ngày 
	MUCGIA_MOT FLOAT,
	-- Giá thuê <= 7 ngày
	MUCGIA_HAI FLOAT,
	-- Giá thuê <= 10 ngày
	MUCGIA_BA FLOAT
)
CREATE TABLE THANHPHO(
	ID_THANHPHO INT IDENTITY(1,1) PRIMARY KEY,
	TEN_THANHPHO NVARCHAR(100),
)
CREATE TABLE QUAN(
	ID_QUAN INT IDENTITY(1,1) PRIMARY KEY,
	ID_THANHPHO INT,
	TEN_QUAN NVARCHAR(100),
)
CREATE TABLE NHA(
	THUTU_NHA INT IDENTITY(1,1) UNIQUE,
	ID_NHA VARCHAR(50) PRIMARY KEY,
	-- link tới tài khoản chủ nhà
	ID_TAIKHOAN INT,
	KHUTIEPTAN BIT,
	CHECKIN VARCHAR(5),
	CHECKOUT VARCHAR(5),
	KHOANGCACH_TRUNGTAMTP FLOAT,
	SOTANG TINYINT,
	PHUPHI_BUASANG FLOAT,
	SONHA NVARCHAR(150),
	TEN_DUONG NVARCHAR(100),
	ID_QUAN INT,
	SO_NGUOI INT,
	SO_GIUONGPHU INT,
	ID_BANGGIA INT,
	CONSTRAINT FK_NHA_BANGGIA FOREIGN KEY(ID_BANGGIA) REFERENCES BANGGIA (ID_BANGGIA),
	CONSTRAINT FK_NHA_TAIKHOAN FOREIGN KEY(ID_TAIKHOAN) REFERENCES TAIKHOAN (ID_TAIKHOAN),
)

CREATE TABLE STYLE(
	ID_STYLE INT IDENTITY(1,1) PRIMARY KEY,
	TEN_STYLE NVARCHAR(100)
)

CREATE TABLE STYLENHA(
	ID_STYLENHA INT IDENTITY(1,1) PRIMARY KEY,
	ID_NHA VARCHAR(50),
	ID_STYLE INT,
	CONSTRAINT FK_STYLENHA_NHA FOREIGN KEY(ID_NHA) REFERENCES NHA (ID_NHA),
	CONSTRAINT FK_STYLENHA_STYLE FOREIGN KEY(ID_STYLE) REFERENCES STYLE (ID_STYLE),
)

-- Cơ sở vật chất
CREATE TABLE CSVC(
-- Nếu gộp chung CSVC + chi tiết => Thêm cột thứ tự
	ID_CSVC INT IDENTITY(1,1) PRIMARY KEY,
	TEN_CSVC NVARCHAR(MAX)
	
)
CREATE TABLE CHITIETCSVC(
	ID_CT_CSVC INT IDENTITY(1,1) PRIMARY KEY,
	ID_CSVC INT,
	TEN_CSVC NVARCHAR(MAX),
	CONSTRAINT FK_CTCSVC_CSVC FOREIGN KEY(ID_CT_CSVC) REFERENCES CSVC (ID_CSVC),
)
-- Cơ sở vật chất nhà
CREATE TABLE CSVCNHA(
	ID_CSVC_NHA INT IDENTITY(1,1) PRIMARY KEY,
	ID_CT_CSVC INT,
	ID_NHA VARCHAR(50),
	SOLUONG INT,
	CONSTRAINT FK_CSVCNHA_CHITIETCSVC FOREIGN KEY(ID_CT_CSVC) REFERENCES CHITIETCSVC (ID_CT_CSVC),
)

CREATE TABLE LOAIPHONG(
	ID_LOAIPHONG INT IDENTITY(1,1) PRIMARY KEY,
	TEN_LOAIPHONG NVARCHAR(100),
)

CREATE TABLE LOAIGIUONG(
	ID_LOAIGIUONG INT IDENTITY(1,1) PRIMARY KEY,
	TEN_LOAIGIUONG NVARCHAR(100),
)

CREATE TABLE PHONG(
	ID_PHONG INT IDENTITY(1,1) PRIMARY KEY,
	ID_NHA VARCHAR(50),
	TEN_PHONG NVARCHAR(100),
	ID_LOAIPHONG INT,
	ID_LOAIGIUONG INT,
	SOGIUONG SMALLINT,
	SONGUOITOIDA SMALLINT,
	SOGIUONG_PHU SMALLINT,
	GIAGIUONG_PHU FLOAT,
	CHIEUDAI_PHONG FLOAT,
	CHIEURONG_PHONG FLOAT,
	SOLUONG SMALLINT,
	CONSTRAINT FK_PHONG_NHA FOREIGN KEY(ID_NHA) REFERENCES NHA (ID_NHA),
	CONSTRAINT FK_PHONG_LOAIPHONG FOREIGN KEY(ID_LOAIPHONG) REFERENCES LOAIPHONG (ID_LOAIPHONG),
	CONSTRAINT FK_PHONG_LOAIGIUONG FOREIGN KEY(ID_LOAIGIUONG) REFERENCES LOAIGIUONG (ID_LOAIGIUONG),
)

CREATE TABLE HINHANHPHONG(
	ID_HINHANH_PHONG INT IDENTITY(1,1) PRIMARY KEY,
	ID_PHONG INT,
	HINHANH NVARCHAR(MAX),
	CONSTRAINT FK_HINHANHPHONG_PHONG FOREIGN KEY(ID_PHONG) REFERENCES PHONG (ID_PHONG),
)

-- Nội thất
CREATE TABLE NOITHAT(
	ID_NOITHAT INT IDENTITY(1,1) PRIMARY KEY,
	TEN_NOITHAT NVARCHAR(MAX)
	
)
CREATE TABLE CHITIETNOITHAT(
	ID_CT_NOITHAT INT IDENTITY(1,1) PRIMARY KEY,
	ID_NOITHAT INT,
	TEN_CT NVARCHAR(MAX),
	CONSTRAINT FK_CTNOITHAT_NOITHAT FOREIGN KEY(ID_CT_NOITHAT) REFERENCES NOITHAT (ID_NOITHAT),
)
CREATE TABLE NOITHATPHONG(
	ID_NOITHATPHONG INT IDENTITY(1,1) PRIMARY KEY,
	ID_CT_NOITHAT INT,
	ID_PHONG INT,
	SOLUONG INT,
	CONSTRAINT FK_NOITHATPHONG_CHITIETNOITHAT FOREIGN KEY(ID_CT_NOITHAT) REFERENCES CHITIETNOITHAT (ID_CT_NOITHAT),
	CONSTRAINT FK_NOITHATPHONG_PHONG FOREIGN KEY(ID_PHONG) REFERENCES PHONG (ID_PHONG),
)

CREATE TABLE DATCANHO(
	ID_DATCANHO INT IDENTITY(1,1) PRIMARY KEY,
	ID_NHA VARCHAR(50),
	NGAYDAT VARCHAR(20),
	CHECKIN VARCHAR(5),
	CHECKOUT VARCHAR(5),
	TONGTIEN_PHONG FLOAT,
	BUASANG INT,
	TONGTIEN_BUASANG FLOAT,
	SO_GIUONGPHU SMALLINT,
	TONGTIEN_GIUONGPHU FLOAT,
	PHI_GTGT FLOAT,
	TONGTIEN FLOAT,
	GHICHU TEXT,
	CONSTRAINT FK_DATCANHO_NHA FOREIGN KEY(ID_NHA) REFERENCES NHA (ID_NHA),
)
CREATE TABLE DANHGIA(
	ID_DANHGIA INT IDENTITY(1,1) PRIMARY KEY,
	ID_TAIKHOAN INT,
	THUTU_NHA INT,
	SOSAO SMALLINT,
	NOIDUNG TEXT,
	CONSTRAINT FK_DANHGIA_TAIKHOAN FOREIGN KEY(ID_TAIKHOAN) REFERENCES TAIKHOAN (ID_TAIKHOAN),
	CONSTRAINT FK_DANHGIA_NHA FOREIGN KEY(THUTU_NHA) REFERENCES NHA (THUTU_NHA),
)