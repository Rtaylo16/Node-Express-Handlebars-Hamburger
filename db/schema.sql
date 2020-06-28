drop database if EXISTS `burgers_db`;
create database `burgers_db`;
use `burgers_db`;

create table `burgers`(
    id INT NOT NULL auto_increment,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    primary key (id)
);

SELECT * FROM `burgers`;