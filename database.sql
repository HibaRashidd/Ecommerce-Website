CREATE DATABASE stellarHub;
USE stellarHub;

CREATE TABLE user (
 id integer PRIMARY KEY AUTO_INCREMENT,
 firstname VARCHAR(255) NOT NULL,
 lastname VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 phoneNo VARCHAR(255) NOT NULL,
 userPassword VARCHAR(255) NOT NULL,
 created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user (firstname,lastname,email,phoneNo,userPassword)
VALUES
('Hiba','Rashid','hibarashid@gmail.com','030012345677','1316'),
('Aiman','khan','khansabb@gmail.com','030012345677','1296');

DELETE FROM user
WHERE id = (SELECT MAX(4) FROM user);