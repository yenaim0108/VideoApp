/*
Created: 2021-01-28
Modified: 2021-01-28
Model: MySQL 8.0
Database: MySQL 8.0
*/

-- Create tables section -------------------------------------------------

-- Table member

CREATE TABLE `member`
(
  `id` VARCHAR(30) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `token` VARCHAR(500) NOT NULL
)
;

ALTER TABLE `member` ADD PRIMARY KEY (`id`)
;

-- Table videoList

CREATE TABLE `video_list`
(
  `path` VARCHAR(500) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `views` INT NOT NULL,
  `upload` VARCHAR(20) NOT NULL
)
;

ALTER TABLE `video_list` ADD PRIMARY KEY (`path`)
;