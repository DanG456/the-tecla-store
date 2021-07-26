IF NOT EXISTS(
	SELECT name
	FROM sys.databases
	WHERE name= N'TeclaStore'
)

CREATE DATABASE TeclaStore
GO

CREATE TABLE usuarios(
	iduser int NOT NULL IDENTITY (1,1),
	nombre char(100) NOT NULL,
	apellidos char(100) NOT NULL,
	contrasena varchar(20) NOT NULL,
	PRIMARY KEY (iduser)
)
GO

CREATE TABLE productos(
	idprod int NOT NULL,
	nombreprod varchar(100) NOT NULL,
	precio float NOT NULL,
	categoria char(50) NOT NULL,
	PRIMARY KEY (idprod)
)
GO

CREATE TABLE carrito(
	iduser int NOT NULL,
	idprod int NOT NULL,
	cantidad int NOT NULL,
	precioT int NOT NULL,
	FOREIGN KEY (iduser) REFERENCES usuarios(iduser),
	FOREIGN KEY (idprod) REFERENCES productos(idprod)
)
GO

INSERT INTO usuarios (nombre, apellidos, contrasena)
	VALUES ('Daniel Arturo', 'Gil Quezada', 'admin1')
GO

INSERT INTO usuarios (nombre, apellidos, contrasena)
	VALUES ('Mauricio', 'Aviles Pina', 'admin2')
GO

SELECT * FROM usuarios