CREATE DATABASE MySqlDB;

CREATE TABLE messages (
    Id int NOT NULL AUTO_INCREMENT,
    Sender varchar(255) NOT NULL,
    Receiver varchar(255) NOT NULL,
    Message varchar(255) NOT NULL,
    Timestmp TIMESTAMP CURRENT_TIMESTAMP
);

