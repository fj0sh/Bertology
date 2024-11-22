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

/*Table structure for table `inquiries` */

DROP TABLE IF EXISTS `inquiries`;

CREATE TABLE `inquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(63) DEFAULT NULL,
  `lastName` varchar(63) DEFAULT NULL,
  `email` varchar(63) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` enum('PENDING','RESOLVED') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'PENDING',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `inquiries` */

insert  into `inquiries`(`id`,`firstName`,`lastName`,`email`,`message`,`createAt`,`status`) values 
(8,'Monkey','King','wukong@gmail.com','why car not work, no cloud service for cloud vehicle??','2024-11-22 23:14:54','RESOLVED'),
(9,'Francis','Cutamora','francisjoshuacutamora@gmail.com','Hello! Id like to ask if u have an available tractor?','2024-11-23 02:31:14','PENDING'),
(10,'Francis','Cutamora','francisjoshuacutamora@gmail.com','tEST','2024-11-23 02:44:22','RESOLVED');

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `installers` */

insert  into `installers`(`installerId`,`installerFirstName`,`installerLastName`,`installerAddress`,`installerPhoneNumber`,`installerEmail`,`installerImage`,`createdAt`,`installerExperience`,`installerStatus`) values 
(36,'Kai','Sotto','Goat street','09668891051','kaiju@pba.edu.ph','https://res.cloudinary.com/dgxlqujte/image/upload/v1732288943/qhc1lnwqznm495juqqdp.jpg','2024-11-22 23:23:58','3 time NBA world champion, Top 3 Miss Universe 2005, Best in Math Grade 6, TESDA welding Certificate, Most kind grade 1','ACTIVE');

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
(28,'Car Alarm Installation',3500,NULL,'Advanced security systems designed to prevent theft with motion detection, shock sensors, and remote control features.'),
(29,'Central Locking',2500,NULL,'Complete central locking kits for all car models. Includes actuators, control modules, and remotes.'),
(30,'Basic Sound Setup',15000,NULL,'Entry-level sound systems that include stereos, speakers, and subwoofers for enhanced audio quality.'),
(31,'Stereo Nakamichi',7500,NULL,' High-performance Nakamichi stereos featuring Bluetooth, USB, and AUX connectivity.'),
(32,'Speaker Nakamichi',4500,NULL,'Premium Nakamichi speakers for crisp sound clarity and deep bass. Available in various sizes to fit different vehicles.'),
(33,'Dashcam',4500,NULL,'Brand new QYC dashcams with front and rear recording, HD resolution, and night vision.'),
(34,'Subwoofer Kinetic',7500,NULL,'(NULHigh-quality Kinetic subwoofers for powerful bass performance. Available in compact and full-sized models.L)'),
(35,'Horn PIAA',2500,NULL,'Brand new PIAA horns known for their loud and durable design. Perfect for all-weather conditions.'),
(36,'Turbo Timer Installation',1000,NULL,'Protect your turbocharged engine with a turbo timer. Offered as an installation service with customer-provided brand-new timers.'),
(37,'Keyless Entry Installation',2500,NULL,'State-of-the-art keyless entry systems for enhanced security and convenience. Includes remotes and wiring kits.'),
(38,'LED Light Installation',1000,NULL,'High-performance LED lighting kits for headlights, taillights, and interior lights. Offers superior brightness and energy efficiency.'),
(39,'Spoiler',1000,NULL,'Aerodynamic spoilers in various designs and finishes. Perfectly fits most car models.'),
(40,'Rain Visor',1000,NULL,'Durable rain visors for car windows. Designed to withstand harsh weather and provide comfort during rains.'),
(41,'Skirt',1000,NULL,'Stylish side skirts for added aesthetics and improved aerodynamics.'),
(42,'Sound System and Alarm TroubleShoot',1000,NULL,'Diagnose and fix issues with car sound systems or alarms. Resolves wiring faults, connectivity issues, and system malfunctions effectively.'),
(43,'Car Door Lock Problems',1000,NULL,'Resolve mechanical or electronic door lock problems. Includes repairs for manual locks, central locking systems, or keyless entry setups.'),
(44,'Parking Sensor 4 Eye',2500,NULL,'Brand new 4-eye parking sensors for improved safety while reversing. Includes control unit and sensors.'),
(45,'DRL Installation',1000,NULL,'Stylish DRLs for enhanced daytime visibility and a modern look.'),
(46,'Bulb Installation',1000,NULL,'High-quality bulbs for headlights, fog lights, and interior use. Available in LED, halogen, and HID options.'),
(47,'Test For Add service EndPoint',10000,NULL,'Test');

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
