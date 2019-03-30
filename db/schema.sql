CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(75) NOT NULL,
devoured BOOLEAN DEFAULT false,
-- devoured tinyint(0) DEFAULT NULL, --
PRIMARY KEY (id)
);

;show table 
SELECT * FROM burgers;

-- NOTES --
-- "MySQL doesn't support true booleans as per standard SQL. --
-- It uses integer values 1 and 0 respectively for true and false. --
-- It does support the keywords true and false, but these are mapped to the integer values." --

-- Documentation: BOOL, BOOLEAN --
-- These types are synonyms for TINYINT(1). A value of zero is considered false. Nonzero values are considered true --