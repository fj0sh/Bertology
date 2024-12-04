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

USE `railway`;

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booked_service` */

insert  into `booked_service`(`id`,`serviceId`,`bookingId`) values 
(1,1,1),
(2,1,2),
(3,1,3),
(4,2,3),
(5,1,4),
(6,2,4),
(7,1,5),
(8,2,5),
(9,1,6),
(10,2,6),
(11,1,7),
(12,2,7),
(15,1,10),
(16,1,11),
(17,1,12),
(18,1,13),
(19,1,14);

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booking` */

insert  into `booking`(`id`,`firstName`,`lastName`,`email`,`contactNumber`,`municipality`,`barangay`,`landmark`,`carModel`,`additionalDetails`,`proofOfPayment`,`bookedDate`,`status`,`mode`,`street`,`installerId`) values 
(1,'Jernol','Abayon','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732788775/hllecjmacten1xv9hyia.jpg','2024-06-29 10:00-11:00','DONE','ONSITE',NULL,1),
(2,'Jerlon','Abayon','francisjoshuacutamora@gmail.com','9668891051',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732790666/wd0pqonpan95rvnerlhm.jpg','2024-11-28 10:00-11:00','MISSED','ONSITE',NULL,2),
(3,'Ritchell','Valendez','francisjoshuacutamora@gmail.com','9910245909',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732793459/nqo1uit7yxh9nwrmbqcq.jpg','2024-1-29 10:00-11:00','DONE','ONSITE',NULL,2),
(4,'Francis','Abayon','francisjoshuacutamora@gmail.com','9915488912',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732793760/vy20qmw8ipnzafgzmvs1.jpg','2024-11-29 11:00-12:00','DECLINED','ONSITE',NULL,NULL),
(5,'Jhu','Aringay','francisjoshuacutamora@gmail.com','9668891051',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732793914/cxn19qc1yfzghz3b8g3s.jpg','2024-11-29 11:00-12:00','DECLINED','ONSITE',NULL,NULL),
(6,'Ritchell','Valendez','francisjoshuacutamora@gmail.com','9788891512',NULL,'',NULL,'AMC Encore','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732794501/fhj0elqem1ilo7vhdk4u.jpg','2024-11-28 9:00-10:00','MISSED','ONSITE',NULL,2),
(7,'Francis','Cutamora','francisjoshuacutamora@gmail.com','9548847591',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1732794855/butoc24qmsfpu9mevq1m.jpg','2024-12-17 9:00-10:00','PENDING','ONSITE',NULL,NULL),
(10,'Francis','Cutamora','francisjoshuacutamora@gmail.com','23423423231',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1733108429/inrsjm3gzdvs2vuwifp9.jpg','2025-05-07 4:00-5:00','MISSED','ONSITE',NULL,1),
(11,'Francis','Cutamora','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1733215388/tori6yphijhmu61o1hah.jpg','2024-12-11 8:00-9:00','PENDING','ONSITE',NULL,NULL),
(12,'Francis','Cutamora','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1733215560/m5ukfftiwgcytng5vazc.jpg','2024-12-04 8:00-9:00','DONE','ONSITE',NULL,1),
(13,'Francis','Cutamora','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Test','Test','https://res.cloudinary.com/dgxlqujte/image/upload/v1733215653/cqxqqgghilxl0wfszvk0.jpg','2024-12-04 8:00-9:00','APPROVED','ONSITE',NULL,1),
(14,'Francis','Cutamora','francisjoshuacutamora@gmail.com','12312312312',NULL,'',NULL,'Test','Tset','https://res.cloudinary.com/dgxlqujte/image/upload/v1733223332/onu5hedmiqml2yvw5cbf.jpg','2024-12-04 8:00-9:00','APPROVED','ONSITE',NULL,1);

/*Table structure for table `decline_reason` */

DROP TABLE IF EXISTS `decline_reason`;

CREATE TABLE `decline_reason` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookingId` int DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `decline_reason_fk` (`bookingId`),
  CONSTRAINT `decline_reason_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `decline_reason` */

insert  into `decline_reason`(`id`,`bookingId`,`reason`) values 
(1,4,'False Payment'),
(2,5,'False Payment');

/*Table structure for table `inquiries` */

DROP TABLE IF EXISTS `inquiries`;

CREATE TABLE `inquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(63) DEFAULT NULL,
  `lastName` varchar(63) DEFAULT NULL,
  `email` varchar(63) DEFAULT NULL,
  `message` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` enum('PENDING','RESOLVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'PENDING',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `inquiries` */

insert  into `inquiries`(`id`,`firstName`,`lastName`,`email`,`message`,`createAt`,`status`) values 
(1,'Jaira','Mier','francisjoshuacutamora@gmail.com','Test Inquiry','2024-11-28 18:57:13','RESOLVED'),
(2,'Jovie','Jurac','Jovie@gmail.com','Test','2024-12-04 14:26:39','PENDING'),
(4,'Francis','monggoy','francisjoshuacutamora@gmail.com','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','2024-12-04 14:49:05','PENDING');

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
  `inactivityDate` datetime DEFAULT NULL,
  PRIMARY KEY (`installerId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `installers` */

insert  into `installers`(`installerId`,`installerFirstName`,`installerLastName`,`installerAddress`,`installerPhoneNumber`,`installerEmail`,`installerImage`,`createdAt`,`installerExperience`,`installerStatus`,`inactivityDate`) values 
(1,'Nilbert','Umaran','Lahug Cebu City','12312312312','cutamora@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732788840/dzgaq0uhy9bxprvsbslq.png','2024-11-28 18:14:31','20 Years Experience','ACTIVE',NULL),
(2,'TestV2','Technician','Mandaue City, Cebu','09668891051','francis@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732790959/dlwgcoimjip048jetyme.jpg','2024-11-28 18:49:51','30 years experience, ME graduate','ACTIVE',NULL);

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(63) DEFAULT NULL,
  `servicePrice` int DEFAULT NULL,
  `serviceImage` varchar(255) DEFAULT NULL,
  `serviceDescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

insert  into `services`(`id`,`serviceName`,`servicePrice`,`serviceImage`,`serviceDescription`) values 
(1,'Car Alarm Installation',3500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787619/itvgw2ijcuzsejb8amdb.png','Advanced security systems designed to prevent theft with motion detection, shock sensors, and remote control features.'),
(2,'Central Locking Installation',2500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787655/tb29qu8ljeoqydhhzhub.png','Complete central locking kits for all car models. Includes actuators, control modules, and remotes.'),
(3,'Basic Car Sound Setup',15000,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787696/h4lq3juvz6lu7t0yntge.png','Entry-level sound systems that include stereos, speakers, and subwoofers for enhanced audio quality.'),
(4,'Stereo Systems (Nakamichi)',7500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787755/nmunaq7ywdgbuewy0x47.png',' High-performance Nakamichi stereos featuring Bluetooth, USB, and AUX connectivity.'),
(5,'Speaker(Nakamichi)',4500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787819/bl0xpk1mczzmk4algrbs.png','Premium Nakamichi speakers for crisp sound clarity and deep bass. Available in various sizes to fit different vehicles.'),
(6,'Dashcam',5500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787855/w5yfcj3wqtpbsuy2mjqc.jpg','Brand new QYC dashcams with front and rear recording, HD resolution, and night vision.'),
(7,'Subwoofer',7500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787890/sehu0gawakyvkvgkech4.png','High-quality Kinetic subwoofers for powerful bass performance. Available in compact and full-sized models.'),
(8,'PIAA Horns',2500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787927/qp45biuhegyoas0nhrgp.png','Brand new PIAA horns known for their loud and durable design. Perfect for all-weather conditions.'),
(9,'LED Lights',1000,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732787964/xth3bzn88onfcxomxj0p.png','High-performance LED lighting kits for headlights, taillights, and interior lights. Offers superior brightness and energy efficiency.'),
(10,'Parking Sensor (4-Eyes)',2500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732788009/ju2akc0gem9sdaidcxpr.png','Brand new 4-eye parking sensors for improved safety while reversing. Includes control unit and sensors.'),
(11,'Skirts',2500,'https://res.cloudinary.com/dgxlqujte/image/upload/v1732791256/axlbcwnfe7gu9r5pbrye.png','Skirt Installations');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`firstname`,`lastname`,`phoneNumber`,`emailAddress`,`password`,`username`,`role`,`dateCreated`,`status`) values 
(1,'Nilbert','Umaran','09090090099','francisjoshuacutamora@gmail.com','bertology','Nilbert','ADMIN','2024-11-28 17:46:36','ACTIVE');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
