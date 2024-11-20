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
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `status` enum('PENDING','APPROVED','DECLINED','VERIFYING','DONE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mode` enum('ONSITE','HOMESERVICE') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `street` varchar(128) DEFAULT NULL,
  `installerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `installer_fk` (`installerId`),
  CONSTRAINT `installer_fk` FOREIGN KEY (`installerId`) REFERENCES `installers` (`installerId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=338 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `booking` */

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `dateAdded` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_cart_fk` (`userId`),
  KEY `product_cart_fk` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `cart` */

insert  into `cart`(`id`,`userId`,`productId`,`dateAdded`) values 
(4,16,32,'2024-09-10 19:52:54'),
(5,16,35,'2024-09-10 20:04:08'),
(6,16,35,'2024-09-10 20:07:25'),
(8,15,32,'2024-09-10 20:17:59'),
(13,NULL,35,'2024-10-09 18:06:20');

/*Table structure for table `draft` */

DROP TABLE IF EXISTS `draft`;

CREATE TABLE `draft` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `draft` */

insert  into `draft`(`id`,`test`) values 
(27,'asdsDD'),
(28,'zxczxc'),
(29,'asds'),
(30,'asdasdasd'),
(31,'asdasdasd'),
(32,'asd'),
(34,'asd'),
(35,'asd'),
(36,'asd');

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
  PRIMARY KEY (`installerId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `installers` */

insert  into `installers`(`installerId`,`installerFirstName`,`installerLastName`,`installerAddress`,`installerPhoneNumber`,`installerEmail`,`installerImage`,`createdAt`,`installerExperience`) values 
(15,'Jhon','Doe','Test','966889105','jhondoe@gmail.com',NULL,'2024-11-14 09:59:56',NULL),
(16,'The','Mechanic','Test','1234567891','mechanic@gmail.com',NULL,'2024-11-19 14:10:59',NULL),
(17,'Jane','Smith','123 New Address','9876543210','jane.smith@example.com','https://example.com/image.jpg','2024-11-19 14:11:30','5 years of experience'),
(20,'Jhon','Warhammer','earth 40k','1231231231','Test@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732001073/iiagu6h5zmn21qzvttgq.jpg','2024-11-19 15:32:20','400 years serving the Imperium of Man'),
(26,'asdfas','dfasd','fasdfasd','12312312312','fasdfasdfas','','2024-11-19 19:32:23','vcvbcvb'),
(27,'dfvsdfg','sdfgsd','fgsdfgsd','12312312312','fgsdfgsdfg','','2024-11-19 19:33:25','fgdsfgsfdg'),
(28,'asdsdf','sdfgsdfg','sdfgsdf','12312312312','gsdfgsdfg','','2024-11-19 19:34:30','sdfgsdfggf'),
(29,'test','test','test','12312313121','Test@gmail.com','','2024-11-19 19:43:43','test'),
(30,'Yeah','Yeah','Yeah','12312312312','YEsh','','2024-11-19 19:44:04','YEsh'),
(31,'Sorsogon','Luxury Hotel','Sorsogon Vulcanizing Shop','12312312312','Bastos@gmail.com','https://res.cloudinary.com/dgxlqujte/image/upload/v1732063433/xlnoqbxxkkhelrnlmshu.jpg','2024-11-20 08:44:39','Sorsogon shoppee pay express');

/*Table structure for table `payment` */

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_type` varchar(255) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `payment` */

insert  into `payment`(`id`,`payment_type`) values 
(1,'Cash'),
(2,'Gcash'),
(3,'PayPal');

/*Table structure for table `product_type` */

DROP TABLE IF EXISTS `product_type`;

CREATE TABLE `product_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `product_type` */

insert  into `product_type`(`id`,`type`) values 
(1,'Interiors'),
(2,'Exteriors'),
(3,'Performance'),
(4,'Safety'),
(5,'Electronics'),
(6,'Convenience');

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(63) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `stocks` int DEFAULT NULL,
  `productType` int DEFAULT NULL,
  `amountSold` int DEFAULT NULL,
  `productImage` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_category_fk` (`productType`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `products` */

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `serviceName` varchar(63) DEFAULT NULL,
  `servicePrice` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

insert  into `services`(`id`,`serviceName`,`servicePrice`) values 
(28,'Car Alarm Installation',3500),
(29,'Central Locking',2500),
(30,'Basic Sound Setup',15000),
(31,'Stereo Nakamichi',7500),
(32,'Speaker Nakamichi',4500),
(33,'Dashcam',4500),
(34,'Subwoofer Kinetic',7500),
(35,'Horn PIAA',2500),
(36,'Turbo Timer Installation',1000),
(37,'Keyless Entry Installation',2500),
(38,'LED Light Installation',1000),
(39,'Spoiler',1000),
(40,'Rain Visor',1000),
(41,'Skirt',1000),
(42,'Sound System and Alarm TroubleShoot',1000),
(43,'Car Door Lock Problems',1000),
(44,'Parking Sensor 4 Eye',2500),
(45,'DRL Installation',1000),
(46,'Bulb Installation',1000);

/*Table structure for table `time_slot` */

DROP TABLE IF EXISTS `time_slot`;

CREATE TABLE `time_slot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `bookingId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `booking_time_fk` (`bookingId`),
  CONSTRAINT `booking_time_fk` FOREIGN KEY (`bookingId`) REFERENCES `booking` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `time_slot` */

/*Table structure for table `user_purchase` */

DROP TABLE IF EXISTS `user_purchase`;

CREATE TABLE `user_purchase` (
  `userPurchaseId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`userPurchaseId`),
  KEY `user_fk` (`userId`),
  KEY `product_fk` (`productId`),
  CONSTRAINT `product_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `user_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user_purchase` */

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
