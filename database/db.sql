-- crear base
CREATE DATABASE dbnode;

-- usar base
USE dbnode;

-- crear tabla
CREATE TABLE customer (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(15)
);

-- mostrar tabla
SHOW TABLES;

-- describir tabla
describe customer;