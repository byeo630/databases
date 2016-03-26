CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT, 
  name VARCHAR(15), 
  PRIMARY KEY (id)
);
CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT, 
  name VARCHAR(15), 
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT, 
  fk_user INT,
  fk_room INT, 
  PRIMARY KEY (id), 
  FOREIGN KEY (fk_user) 
    REFERENCES users (id), 
  FOREIGN KEY (fk_room) 
    REFERENCES rooms (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ALTER TABLE MESSAGES passing foreign keys from users and from rooms
