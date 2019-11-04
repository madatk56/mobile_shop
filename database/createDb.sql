
USE mobi;
GO
DROP TABLE IF EXISTS sale;
DROP TABLE IF EXISTS product;
GO
CREATE TABLE product (
	productCode nvarchar(15) not null,
	productName nvarchar(50) not null,
	buyPrice nvarchar(50) not null,
	quantityInStock nvarchar(15) not null,
	updateTime date,
	expiryTime date,
	description text,
	primary key (productCode)
)
GO
DROP TABLE IF EXISTS sale;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS account;
GO

CREATE TABLE account (
	userName nvarchar(45) not null,
	password nvarchar(50) not null,
	primary key (userName)
)
GO
DROP TABLE IF EXISTS customer;
GO
CREATE TABLE customer (
	userName nvarchar(45) not null FOREIGN KEY REFERENCES account(userName),
	fullName nvarchar(45) not null,
	phone nvarchar(45),
	address nvarchar(45),
	primary key (userName),

)
GO
DROP TABLE IF EXISTS sale;
GO
CREATE TABLE sale (
	productCode nvarchar(15) not null FOREIGN KEY REFERENCES product(productCode),
	userName nvarchar(45) not null FOREIGN KEY REFERENCES account(userName),
	quantityOrdered nvarchar(5) not null,
)
GO

