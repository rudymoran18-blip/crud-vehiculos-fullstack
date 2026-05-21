CREATE DATABASE IF NOT EXISTS practica_sql;
USE practica_sql;

CREATE TABLE vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(15) NOT NULL UNIQUE,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    anio INT NOT NULL,
    color VARCHAR(30) NOT NULL,
    reparado TINYINT(1) NOT NULL DEFAULT 0,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    deleted_at TIMESTAMP NULL
);

INSERT INTO vehiculos 
(placa, marca, modelo, anio, color, reparado)
VALUES
('P123ABC', 'Toyota', 'Corolla', 2020, 'Blanco', 0),

('P456DEF', 'Honda', 'Civic', 2019, 'Negro', 1),

('P789GHI', 'Mazda', 'CX-5', 2022, 'Gris', 0),

('P321JKL', 'Hyundai', 'Elantra', 2021, 'Azul', 0),

('P654MNO', 'Kia', 'Sportage', 2023, 'Rojo', 1);