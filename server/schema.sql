CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id        INT AUTO_INCREMENT NOT NULL,
  userId    INT NOT NULL,
  text      varchar(60) NOT NULL,
  roomname  varchar(8),
  PRIMARY KEY(id));


CREATE TABLE users (
  id         INT AUTO_INCREMENT NOT NULL,
  username   varchar(10) NOT NULL,
  PRIMARY KEY(id));



/* Create other tables and define schemas for them here! */
-- CREATE TABLE users (
--   id               INT AUTO_INCREMENT NOT NULL,
--   username         CHAR(10) NOT NULL,
--   PRIMARY KEY(id));


-- CREATE TABLE rooms (
--   id          INT AUTO_INCREMENT NOT NULL,
--   roomname    CHAR(8) DEFAULT NULL,
--   PRIMARY KEY(id));


-- CREATE TABLE messages (
--   id          INT AUTO_INCREMENT NOT NULL,
--   username    CHAR(10) NOT NULL,
--   messages    CHAR(60),
--   roomname    CHAR(8),
--   usernameId  INT,
--   roomId      INT,
--   PRIMARY KEY(id),
--   FOREIGN KEY (usernameId)
--           REFERENCES users(id),
--   FOREIGN KEY (roomId)
--           REFERENCES rooms(id)
--   );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

