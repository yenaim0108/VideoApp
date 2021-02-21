-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.4-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- snap 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `snap` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `snap`;

-- 테이블 snap.member 구조 내보내기
CREATE TABLE IF NOT EXISTS `member` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `token` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 snap.member:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` (`id`, `password`, `token`) VALUES
	('snap', '0201', '-'),
	('snap01', '0201', '-'),
	('yenaim0108', '0108', '-');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;

-- 테이블 snap.video_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `video_list` (
  `idx` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `link` text NOT NULL,
  `thumbnail` text DEFAULT NULL,
  `title` text NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `upload` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 테이블 데이터 snap.video_list:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `video_list` DISABLE KEYS */;
INSERT INTO `video_list` (`idx`, `link`, `thumbnail`, `title`, `views`, `upload`) VALUES
	(1, 'https://youtu.be/Xco5vbBmF5c', 'https://img.youtube.com/vi/Xco5vbBmF5c/maxresdefault.jpg', '[IU] Rain-Drop & Heart(마음) Concert Live Clip (@2017 Tour ‘Palette’)', 4090468, '2017-12-30 00:00:00'),
	(2, 'https://youtu.be/o_nxIQTM_B0', 'https://img.youtube.com/vi/o_nxIQTM_B0/maxresdefault.jpg', '[IU] Blueming Live Clip (2019 IU Tour Concert \'Love, poem\')', 31823863, '2021-12-25 00:00:00'),
	(3, 'https://youtu.be/JtFI8dtPvxI', 'https://img.youtube.com/vi/JtFI8dtPvxI/maxresdefault.jpg', '[최초 공개] 아이유(IU) \'Celebrity\' 라이브', 5107037, '2021-01-29 00:00:00'),
	(4, 'https://youtu.be/tJM0yIbg8iQ', 'https://img.youtube.com/vi/tJM0yIbg8iQ/hqdefault.jpg', '[IU] \'eight\' Acoustic Ver. Live Clip', 35692391, '2020-05-16 00:00:00'),
	(5, 'https://youtu.be/TZSxoQl5L7w', 'https://img.youtube.com/vi/TZSxoQl5L7w/maxresdefault.jpg', '[B3] 농업 활성화를 위한 스마트팜 \'핸디팜(Handy Farm)\'', 195, '2021-02-04 00:00:00');
/*!40000 ALTER TABLE `video_list` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
