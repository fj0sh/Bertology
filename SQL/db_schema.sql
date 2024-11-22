/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 8.0.36 : Database - brtgy_draft
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`brtgy_draft` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `brtgy_draft`;

/*Table structure for table `booked_service` */

DROP TABLE IF EXISTS `booked_service`;

CREATE TABLE `booked_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceId` int DEFAULT NULL,
  `bookingId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `booking_fk` (`bookingId`),
  KEY `service_fk` (`serviceId`),
  CONSTRAINT `booking_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_fk` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booked_service` */

insert  into `booked_service`(`id`,`serviceId`,`bookingId`) values 
(113,28,340),
(114,30,340),
(115,29,340),
(116,28,341),
(117,29,341),
(118,28,342),
(119,29,342),
(120,28,343),
(121,29,343),
(122,28,344);

/*Table structure for table `booking` */

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `contactNumber` varchar(11) DEFAULT NULL,
  `municipality` varchar(45) DEFAULT NULL,
  `barangay` varchar(45) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `carModel` varchar(45) DEFAULT NULL,
  `additionalDetails` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `proofOfPayment` varchar(255) DEFAULT NULL,
  `bookedDate` varchar(45) DEFAULT NULL,
  `status` enum('PENDING','APPROVED','DECLINED','DONE','MISSED') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mode` enum('ONSITE','HOMESERVICE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `street` varchar(128) DEFAULT NULL,
  `installerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `installer_fk` (`installerId`),
  CONSTRAINT `installer_fk` FOREIGN KEY (`installerId`) REFERENCES `installers` (`installerId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=345 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booking` */

insert  into `booking`(`id`,`firstName`,`lastName`,`email`,`contactNumber`,`municipality`,`barangay`,`landmark`,`carModel`,`additionalDetails`,`proofOfPayment`,`bookedDate`,`status`,`mode`,`street`,`installerId`) values 
(340,'Francis','Cutamora','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Ferrari Testarossa','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732065942/x6h5xlkklujtjgcmtipt.jpg','2024-11-28 9:00-10:00','DONE','ONSITE',NULL,31),
(341,'test','test','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Ferrari Testarossa','test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732082650/scibp5ahduxraqsivk9s.jpg','2024-11-27 4:00-7:00','DECLINED','ONSITE',NULL,NULL),
(342,'jernol','Abayon','jerlon@gmail.com','12312312312',NULL,'',NULL,'Ferrari Testarossa','test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732082650/scibp5ahduxraqsivk9s.jpg','2024-11-26 4:00-7:00','DONE','ONSITE',NULL,20),
(343,'Teset','Test','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Ferrari Testarossa','test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732082650/scibp5ahduxraqsivk9s.jpg','2024-11-27 1:00-4:00','PENDING','ONSITE',NULL,NULL),
(344,'Test','Test','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Tesla X','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732170651/hnsg8jhyvlmtmhwxgn22.jpg','2024-11-22 10:00-11:00','DECLINED','ONSITE',NULL,NULL);

/*Table structure for table `inquiries` */

DROP TABLE IF EXISTS `inquiries`;

CREATE TABLE `inquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(63) DEFAULT NULL,
  `lastName` varchar(63) DEFAULT NULL,
  `email` varchar(63) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `inquiries` */

insert  into `inquiries`(`id`,`firstName`,`lastName`,`email`,`message`,`createAt`) values 
(1,NULL,NULL,NULL,NULL,'2024-11-22 11:36:58'),
(2,'Test','Test','Test@gmail.com','Test inquiry','2024-11-22 13:19:50'),
(3,'Renato','Dulog','renrendulog@gmail.com','Naa moy Ice Dri Sir?','2024-11-22 13:22:02'),
(4,'james','tamioc','Test@gmail.com','AISUdhoihaoisbfasdbfojnsdfan','2024-11-22 14:27:04'),
(5,'Test','Test','test@gmail.com','Test','2024-11-22 14:35:31'),
(6,'test','test','test@gmail.com','Test','2024-11-22 14:35:55'),
(7,'Test','Test','test@gmail.com','Test','2024-11-22 14:36:41');

/*Table structure for table `installers` */

DROP TABLE IF EXISTS `installers`;

CREATE TABLE `installers` (
  `installerId` int NOT NULL AUTO_INCREMENT,
  `installerFirstName` varchar(63) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `installerLastName` varchar(63) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `installerAddress` varchar(127) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `installerPhoneNumber` varchar(11) DEFAULT NULL,
  `installerEmail` varchar(127) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `installerImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `installerExperience` varchar(255) DEFAULT NULL,
  `installerStatus` enum('ACTIVE','INACTIVE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'ACTIVE',
  PRIMARY KEY (`installerId`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `installers` */

insert  into `installers`(`installerId`,`installerFirstName`,`installerLastName`,`installerAddress`,`installerPhoneNumber`,`installerEmail`,`installerImage`,`createdAt`,`installerExperience`,`installerStatus`) values 
(15,'Jhon','Doe','Test','966889105','jhondoe@gmail.com',NULL,'2024-11-14 09:59:56',NULL,'ACTIVE'),
(16,'The','Mechanic','Test','1234567891','mechanic@gmail.com',NULL,'2024-11-19 14:10:59',NULL,'ACTIVE'),
(20,'Jhon','Warhammer','earth 40k','1231231231','Test@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732001073/iiagu6h5zmn21qzvttgq.jpg','2024-11-19 15:32:20','400 years serving the Imperium of Man','ACTIVE'),
(31,'Sorsogon','Luxury Hotel','Sorsogon Vulcanizing Shop','12312312312','Bastos@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732063433/xlnoqbxxkkhelrnlmshu.jpg','2024-11-20 08:44:39','Sorsogon shoppee pay express','ACTIVE'),
(32,'Jhon','Warhammer2k','earth 40k','12312312312','Jhon@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732084065/p1civ9qfb90v48a3wfte.jpg','2024-11-20 14:27:47','4000 years serving the Imperium of Man','ACTIVE'),
(34,'Caloy','Installer','test','12312312312','Test@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732191130/kzyqxwqggnqcajf4ughp.jpg','2024-11-21 20:12:12','test','ACTIVE');

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(63) DEFAULT NULL,
  `servicePrice` int DEFAULT NULL,
  `serviceImage` varchar(255) DEFAULT NULL,
  `serviceDescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

insert  into `services`(`id`,`serviceName`,`servicePrice`,`serviceImage`,`serviceDescription`) values 
(28,'Car Alarm Installation',3500,NULL,NULL),
(29,'Central Locking',2500,NULL,NULL),
(30,'Basic Sound Setup',15000,NULL,NULL),
(31,'Stereo Nakamichi',7500,NULL,NULL),
(32,'Speaker Nakamichi',4500,NULL,NULL),
(33,'Dashcam',4500,NULL,NULL),
(34,'Subwoofer Kinetic',7500,NULL,NULL),
(35,'Horn PIAA',2500,NULL,NULL),
(36,'Turbo Timer Installation',1000,NULL,NULL),
(37,'Keyless Entry Installation',2500,NULL,NULL),
(38,'LED Light Installation',1000,NULL,NULL),
(39,'Spoiler',1000,NULL,NULL),
(40,'Rain Visor',1000,NULL,NULL),
(41,'Skirt',1000,NULL,NULL),
(42,'Sound System and Alarm TroubleShoot',1000,NULL,NULL),
(43,'Car Door Lock Problems',1000,NULL,NULL),
(44,'Parking Sensor 4 Eye',2500,NULL,NULL),
(45,'DRL Installation',1000,NULL,NULL),
(46,'Bulb Installation',1000,NULL,NULL),
(47,'Test For Add service EndPoint',10000,NULL,NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(64) DEFAULT NULL,
  `lastname` varchar(64) DEFAULT NULL,
  `phoneNumber` varchar(11) DEFAULT NULL,
  `emailAddress` varchar(64) DEFAULT NULL,
  `password` varchar(23) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `role` enum('ADMIN','CUSTOMER') DEFAULT NULL,
  `dateCreated` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` enum('ACTIVE') DEFAULT 'ACTIVE',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`firstname`,`lastname`,`phoneNumber`,`emailAddress`,`password`,`username`,`role`,`dateCreated`,`status`) values 
(15,'Mike','Oxlong','096969669','mike@gmail.com','password','Mike','ADMIN','2024-07-29 09:18:52','ACTIVE'),
(16,'Moe','Lester','09696969669','moe@gmail.com','moeLester','Moe','CUSTOMER','2024-07-29 09:18:52','ACTIVE'),
(17,'Joe','Mama','0969696966','joe@gmail.com','joeMama','Joe','CUSTOMER','2024-07-29 09:18:52','ACTIVE'),
(18,'Fae','Dofilia','9669991051','Fae@gmail.com','FaeDo','FaeDo','CUSTOMER','2024-07-29 09:24:25','ACTIVE'),
(19,'Test','test','9668891051','Test@gmail.com',NULL,'Test','CUSTOMER','2024-07-29 09:44:43','ACTIVE'),
(20,'Francis','Cutamora','1231231231','francisjoshuacutamora@gmail.com','cutamora','francis','ADMIN','2024-11-19 09:34:35','ACTIVE');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
