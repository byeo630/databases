CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT, 
  name VARCHAR(15), 
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT, 
  text VARCHAR(120),
  room VARCHAR(20), 
  fk_user INT,
  PRIMARY KEY (id), 
  FOREIGN KEY (fk_user) 
    REFERENCES users (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ALTER TABLE MESSAGES passing foreign keys from users and from rooms
